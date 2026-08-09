(() => {
  'use strict';

  const STORAGE_KEY = 'spatialFlowCheckoutPrototype';
  const groupsHost = document.querySelector('[data-packaging-groups]');
  if (!groupsHost) return;

  const sourceItems = [...document.querySelectorAll('[data-packaging-source-item]')].map((node) => ({
    key: node.dataset.itemKey,
    name: node.dataset.itemName
  }));

  let scheduled = false;
  let observerConnected = false;

  const readDraft = () => {
    try {
      return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}').packagingDraft || null;
    } catch (error) {
      return null;
    }
  };

  const packageLabel = (state, groupId) => {
    const index = state.groups.findIndex((group) => group.id === groupId);
    return `Package ${String(Math.max(index, 0) + 1).padStart(2, '0')}`;
  };

  const isEveryItemAlreadySeparate = (state) => {
    if (!state || !Array.isArray(state.groups) || state.groups.length !== sourceItems.length) return false;
    return state.groups.every((group) => (
      sourceItems.filter((item) => state.assignments?.[item.key] === group.id).length === 1
    ));
  };

  const buildPlan = (state) => {
    const rows = state.groups.map((group) => {
      const members = sourceItems.filter((item) => state.assignments[item.key] === group.id);
      if (!members.length) return '';
      return `
        <div class="packaging-custom-plan__row">
          <strong>${packageLabel(state, group.id)}</strong>
          <span>${members.map((item) => item.name).join(' + ')}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="packaging-custom-rule">
        <div class="packaging-custom-rule__copy">
          <strong>Build combinations here.</strong>
          <span>Each item belongs to exactly one product package. Moving an item transfers it from its current package — it is never duplicated.</span>
        </div>
        <div class="packaging-custom-plan" aria-label="Current custom packaging groups">
          ${rows || '<div class="packaging-custom-plan__empty">Start by moving an item into a package.</div>'}
        </div>
      </div>
    `;
  };

  const enhanceCustomManager = (state) => {
    const manager = groupsHost.querySelector('.packaging-custom-manager');
    if (!manager) return;

    const copy = manager.querySelector('div');
    if (copy) {
      copy.innerHTML = `
        <strong>Custom grouping</strong>
        <span>Decide which products should share the same product package. Packaging style is chosen after the grouping is clear.</span>
      `;
    }

    const nextPlanMarkup = buildPlan(state);
    let rule = groupsHost.querySelector('.packaging-custom-rule');
    if (!rule) {
      manager.insertAdjacentHTML('afterend', nextPlanMarkup);
    } else {
      const temp = document.createElement('div');
      temp.innerHTML = nextPlanMarkup;
      const nextRule = temp.firstElementChild;
      if (nextRule && rule.innerHTML !== nextRule.innerHTML) rule.replaceWith(nextRule);
    }

    const addButton = manager.querySelector('[data-custom-add-package]');
    if (addButton) {
      const usefulLimitReached = state.groups.length >= sourceItems.length;
      addButton.hidden = usefulLimitReached;
      addButton.textContent = '+ Create another group';
    }
  };

  const enhanceExpandedPackage = (state, groupNode) => {
    const groupId = groupNode.dataset.groupId;
    if (!groupId) return;

    groupNode.classList.add('is-custom-group');
    const details = groupNode.querySelector('.packaging-group__details');
    if (!details) return;

    const picker = details.querySelector('.packaging-package-picker');
    const tierSwitch = details.querySelector('.packaging-tier-switch');
    if (!picker || !tierSwitch) return;

    const label = packageLabel(state, groupId);

    let groupingStep = details.querySelector('.packaging-custom-step--grouping');
    if (!groupingStep) {
      groupingStep = document.createElement('div');
      groupingStep.className = 'packaging-custom-step packaging-custom-step--grouping';
    }
    groupingStep.innerHTML = `<span>01</span><strong>Choose what goes in ${label}</strong>`;

    let styleStep = details.querySelector('.packaging-custom-step--style');
    if (!styleStep) {
      styleStep = document.createElement('div');
      styleStep.className = 'packaging-custom-step packaging-custom-step--style';
    }
    styleStep.innerHTML = `<span>02</span><strong>Choose the packaging style for ${label}</strong>`;

    details.insertBefore(groupingStep, details.firstChild);
    details.insertBefore(picker, groupingStep.nextSibling);
    details.insertBefore(styleStep, picker.nextSibling);
    details.insertBefore(tierSwitch, styleStep.nextSibling);

    const head = picker.querySelector('.packaging-package-picker__head');
    if (head) {
      head.innerHTML = `
        <strong>${label} contents</strong>
        <span>An item can appear in one package only. Moving it here removes it from the package shown beside it.</span>
      `;
    }

    const rows = [...picker.querySelectorAll('.packaging-package-picker__row')];
    rows.forEach((row, index) => {
      const item = sourceItems[index];
      if (!item) return;

      const currentGroupId = state.assignments[item.key];
      const currentLabel = packageLabel(state, currentGroupId);
      row.dataset.assignment = currentGroupId === groupId ? 'here' : 'elsewhere';

      const status = row.querySelector('.packaging-package-picker__status');
      if (status) status.textContent = `✓ Only in ${label}`;

      const move = row.querySelector('[data-move-item][data-target-group]');
      if (move) {
        move.textContent = `Move from ${currentLabel} → ${label}`;
        move.setAttribute('aria-label', `Move ${item.name} from ${currentLabel} to ${label}`);
      }

      const itemCopy = row.querySelector('div');
      if (itemCopy) {
        let owner = itemCopy.querySelector('.packaging-package-picker__owner');
        if (!owner) {
          owner = document.createElement('span');
          owner.className = 'packaging-package-picker__owner';
          itemCopy.appendChild(owner);
        }
        owner.textContent = currentGroupId === groupId ? `Assigned only to ${label}` : `Currently in ${currentLabel}`;
      }
    });
  };

  const enhance = () => {
    scheduled = false;
    const state = readDraft();
    if (!state || state.groupingMode !== 'custom' || !Array.isArray(state.groups)) return;

    observer.disconnect();
    observerConnected = false;

    enhanceCustomManager(state);
    groupsHost.querySelectorAll('.packaging-group').forEach((groupNode) => enhanceExpandedPackage(state, groupNode));

    observer.observe(groupsHost, { childList: true, subtree: true });
    observerConnected = true;
  };

  const scheduleEnhance = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(enhance);
  };

  const observer = new MutationObserver(scheduleEnhance);
  observer.observe(groupsHost, { childList: true, subtree: true });
  observerConnected = true;

  // When the user switches directly from Separate to Custom, do not inherit the
  // already-separated three-package state. Route through Together first so the
  // main Packaging controller creates Custom from its intended baseline:
  // Package 01 contains all items, Package 02 starts empty and open for grouping.
  groupsHost.addEventListener('click', (event) => {
    const modeButton = event.target.closest('[data-grouping-mode="custom"]');
    if (!modeButton) return;

    const draft = readDraft();
    if (!draft || draft.groupingMode !== 'separate' || !isEveryItemAlreadySeparate(draft)) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const togetherButton = groupsHost.querySelector('[data-grouping-mode="together"]');
    togetherButton?.click();

    const freshCustomButton = groupsHost.querySelector('[data-grouping-mode="custom"]');
    freshCustomButton?.click();
  }, true);

  groupsHost.addEventListener('click', () => window.setTimeout(scheduleEnhance, 0));
  groupsHost.addEventListener('change', () => window.setTimeout(scheduleEnhance, 0));

  scheduleEnhance();
})();
