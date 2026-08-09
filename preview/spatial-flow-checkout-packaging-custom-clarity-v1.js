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
      return `
        <div class="packaging-custom-plan__row${members.length ? '' : ' is-empty'}">
          <strong>${packageLabel(state, group.id)}</strong>
          <span>${members.length ? members.map((item) => item.name).join(' + ') : '—'}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="packaging-custom-rule">
        <div class="packaging-custom-rule__copy">
          <strong>Build combinations here.</strong>
          <span>Each item belongs to exactly one product package. Selecting it in another package transfers it there automatically.</span>
        </div>
        <div class="packaging-custom-plan" aria-label="Current custom packaging groups">
          ${rows}
        </div>
      </div>
    `;
  };

  const ensureFixedPackageSlots = (state) => {
    if (!state || state.groupingMode !== 'custom') return false;
    if (state.groups.length >= sourceItems.length) return false;

    const addButton = groupsHost.querySelector('[data-custom-add-package]');
    if (!addButton) return false;

    observer.disconnect();
    addButton.hidden = false;
    addButton.click();
    observer.observe(groupsHost, { childList: true, subtree: true });
    window.setTimeout(scheduleEnhance, 0);
    return true;
  };

  const enhanceCustomManager = (state) => {
    const manager = groupsHost.querySelector('.packaging-custom-manager');
    if (!manager) return;

    const copy = manager.querySelector('div');
    if (copy) {
      copy.innerHTML = `
        <strong>Custom grouping</strong>
        <span>Use the package slots below to decide which products stay together. Empty package slots are ignored and never add a fee.</span>
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
    if (addButton) addButton.hidden = true;
  };

  const createAssignmentControl = (state, item, groupId, isHere, row) => {
    const existing = row.querySelector('.packaging-package-picker__assign');
    if (existing) existing.remove();

    const label = document.createElement('label');
    label.className = 'packaging-package-picker__assign';
    label.title = isHere ? packageLabel(state, groupId) : `Assign to ${packageLabel(state, groupId)}`;

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `custom-assignment-${item.key}`;
    input.checked = isHere;
    input.dataset.customAssignItem = item.key;
    input.dataset.customAssignTarget = groupId;
    input.setAttribute('aria-label', isHere
      ? `${item.name} is assigned to ${packageLabel(state, groupId)}`
      : `Assign ${item.name} to ${packageLabel(state, groupId)}`);

    const mark = document.createElement('span');
    mark.setAttribute('aria-hidden', 'true');

    label.append(input, mark);
    row.appendChild(label);
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
        <span>Select a product here to assign it to this package. Its selection disappears from the previous package automatically.</span>
      `;
    }

    const rows = [...picker.querySelectorAll('.packaging-package-picker__row')];
    rows.forEach((row, index) => {
      const item = sourceItems[index];
      if (!item) return;

      const currentGroupId = state.assignments[item.key];
      const currentLabel = packageLabel(state, currentGroupId);
      const isHere = currentGroupId === groupId;
      row.dataset.assignment = isHere ? 'here' : 'elsewhere';

      const status = row.querySelector('.packaging-package-picker__status');
      if (status) status.hidden = true;

      const move = row.querySelector('[data-move-item][data-target-group]');
      if (move) move.hidden = true;

      const itemCopy = row.querySelector('div');
      if (itemCopy) {
        let owner = itemCopy.querySelector('.packaging-package-picker__owner');
        if (!owner) {
          owner = document.createElement('span');
          owner.className = 'packaging-package-picker__owner';
          itemCopy.appendChild(owner);
        }
        owner.textContent = currentLabel.toUpperCase();
      }

      createAssignmentControl(state, item, groupId, isHere, row);
    });

    const removeButton = details.querySelector('[data-packaging-remove]');
    if (removeButton) removeButton.hidden = true;
  };

  const enhanceSummaries = (state) => {
    groupsHost.querySelectorAll('.packaging-group').forEach((groupNode) => {
      const groupId = groupNode.dataset.groupId;
      if (!groupId) return;
      const members = sourceItems.filter((item) => state.assignments[item.key] === groupId);
      if (members.length) return;
      const summary = groupNode.querySelector('.packaging-group__summary-items span');
      if (summary) summary.textContent = '—';
    });
  };

  const enhance = () => {
    scheduled = false;
    const state = readDraft();
    if (!state || state.groupingMode !== 'custom' || !Array.isArray(state.groups)) return;

    if (ensureFixedPackageSlots(state)) return;

    observer.disconnect();
    enhanceCustomManager(state);
    enhanceSummaries(state);
    groupsHost.querySelectorAll('.packaging-group').forEach((groupNode) => enhanceExpandedPackage(state, groupNode));
    observer.observe(groupsHost, { childList: true, subtree: true });
  };

  const scheduleEnhance = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(enhance);
  };

  const observer = new MutationObserver(scheduleEnhance);
  observer.observe(groupsHost, { childList: true, subtree: true });

  // Custom is a different grouping model from Separate. When entering Custom
  // from a fully separated state, route through Together first so Package 01
  // starts with all items and the remaining fixed package slots start empty.
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

  // The visible radio selector is only a clearer front end for the main
  // Packaging controller. Selecting an item in another package triggers the
  // existing authoritative move action, so one item can never exist in two
  // product packages at the same time.
  groupsHost.addEventListener('change', (event) => {
    const assignment = event.target.closest('[data-custom-assign-item][data-custom-assign-target]');
    if (!assignment || !assignment.checked) return;

    const draft = readDraft();
    if (!draft) return;

    const itemKey = assignment.dataset.customAssignItem;
    const targetGroup = assignment.dataset.customAssignTarget;
    if (draft.assignments?.[itemKey] === targetGroup) return;

    const row = assignment.closest('.packaging-package-picker__row');
    const move = row?.querySelector(`[data-move-item="${itemKey}"][data-target-group="${targetGroup}"]`);
    if (move) move.click();
  });

  groupsHost.addEventListener('click', () => window.setTimeout(scheduleEnhance, 0));
  groupsHost.addEventListener('change', () => window.setTimeout(scheduleEnhance, 0));

  scheduleEnhance();
})();
