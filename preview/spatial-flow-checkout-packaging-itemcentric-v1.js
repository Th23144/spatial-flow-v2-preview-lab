(() => {
  'use strict';

  const STORAGE_KEY = 'spatialFlowCheckoutPrototype';
  const groupsHost = document.querySelector('[data-packaging-groups]');
  if (!groupsHost) return;

  const sourceItems = [...document.querySelectorAll('[data-packaging-source-item]')].map((node) => ({
    key: node.dataset.itemKey,
    name: node.dataset.itemName,
    meta: node.dataset.itemMeta || ''
  }));

  let scheduled = false;
  let openDetailsGroupId = null;

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

  const shortPackageLabel = (state, groupId) => {
    const index = state.groups.findIndex((group) => group.id === groupId);
    return String(Math.max(index, 0) + 1).padStart(2, '0');
  };

  const isEveryItemAlreadySeparate = (state) => {
    if (!state || !Array.isArray(state.groups) || state.groups.length !== sourceItems.length) return false;
    return state.groups.every((group) => (
      sourceItems.filter((item) => state.assignments?.[item.key] === group.id).length === 1
    ));
  };

  const ensureFixedPackageSlots = (state) => {
    if (!state || state.groupingMode !== 'custom') return false;
    if (state.groups.length >= sourceItems.length) return false;

    const addButton = groupsHost.querySelector('[data-custom-add-package]');
    if (!addButton) return false;

    observer.disconnect();
    addButton.click();
    observer.observe(groupsHost, { childList: true, subtree: true });
    window.setTimeout(scheduleEnhance, 0);
    return true;
  };

  const findGroupNode = (groupId) => groupsHost.querySelector(`.packaging-group[data-group-id="${groupId}"]`);

  const withExpandedGroup = (groupId, callback) => {
    let groupNode = findGroupNode(groupId);
    if (!groupNode) return;

    if (!groupNode.classList.contains('is-expanded')) {
      groupNode.querySelector('[data-toggle-package]')?.click();
      groupNode = findGroupNode(groupId);
    }

    if (groupNode?.classList.contains('is-expanded')) callback(groupNode);
  };

  const buildItemRows = (state) => sourceItems.map((item) => {
    const currentGroupId = state.assignments[item.key];
    const slotButtons = state.groups.map((group) => {
      const selected = group.id === currentGroupId;
      return `
        <button type="button"
          class="packaging-itemcentric__slot${selected ? ' is-selected' : ''}"
          data-itemcentric-assign-item="${item.key}"
          data-itemcentric-assign-target="${group.id}"
          aria-pressed="${selected ? 'true' : 'false'}">
          ${shortPackageLabel(state, group.id)}
        </button>
      `;
    }).join('');

    return `
      <div class="packaging-itemcentric__item">
        <div class="packaging-itemcentric__item-copy">
          <strong>${item.name}</strong>
          <span>${item.meta}</span>
        </div>
        <div class="packaging-itemcentric__slots" role="group" aria-label="Package for ${item.name}">
          ${slotButtons}
        </div>
      </div>
    `;
  }).join('');

  const buildPackageRows = (state) => {
    const activeGroups = state.groups.map((group) => ({
      group,
      members: sourceItems.filter((item) => state.assignments[item.key] === group.id)
    })).filter(({ members }) => members.length);

    if (!activeGroups.length) {
      return '<div class="packaging-itemcentric__empty-note">Assign at least one item to a package.</div>';
    }

    return activeGroups.map(({ group, members }) => {
      const label = packageLabel(state, group.id);
      const isGift = group.tier === 'gift';
      const detailsOpen = openDetailsGroupId === group.id;
      const detailField = isGift
        ? `
          <label>
            Gift card message
            <textarea maxlength="240" data-itemcentric-meta="giftMessage" data-itemcentric-meta-group="${group.id}" placeholder="Write the message for this gift package.">${group.giftMessage || ''}</textarea>
          </label>`
        : `
          <label>
            Name on package
            <input maxlength="24" data-itemcentric-meta="personalizedName" data-itemcentric-meta-group="${group.id}" value="${group.personalizedName || ''}" placeholder="Optional name for this package" />
          </label>`;

      return `
        <section class="packaging-itemcentric__package" data-itemcentric-package="${group.id}">
          <div class="packaging-itemcentric__package-summary">
            <div class="packaging-itemcentric__package-id">
              <span>Product package</span>
              <strong>${label}</strong>
            </div>
            <div class="packaging-itemcentric__members">
              <strong>${members.map((item) => item.name).join(' · ')}</strong>
              <span>${members.length} item${members.length === 1 ? '' : 's'}</span>
            </div>
            <div class="packaging-itemcentric__tier" role="group" aria-label="Packaging style for ${label}">
              <button type="button" class="${isGift ? '' : 'is-selected'}" data-itemcentric-tier-group="${group.id}" data-itemcentric-tier-value="standard">Standard · Free</button>
              <button type="button" class="${isGift ? 'is-selected' : ''}" data-itemcentric-tier-group="${group.id}" data-itemcentric-tier-value="gift">Gift · +$9</button>
            </div>
            <button type="button" class="packaging-itemcentric__details-toggle" data-itemcentric-details="${group.id}" aria-expanded="${detailsOpen ? 'true' : 'false'}">${detailsOpen ? 'Close' : 'Details'}</button>
          </div>
          ${detailsOpen ? `<div class="packaging-itemcentric__details">${detailField}</div>` : ''}
        </section>
      `;
    }).join('');
  };

  const buildCompactCustom = (state) => {
    const node = document.createElement('section');
    node.className = 'packaging-itemcentric';
    node.dataset.itemcentricCustom = '';
    node.innerHTML = `
      <div class="packaging-itemcentric__intro">
        <strong>Choose a package for each item.</strong>
        <span>Package slots are created automatically. Each item belongs to one package only, so choosing another package moves it there instead of duplicating it.</span>
      </div>

      <section class="packaging-itemcentric__items">
        <div class="packaging-itemcentric__head">
          <strong>Items</strong>
          <span>Choose 01, 02 or 03. Items with the same number are packed together.</span>
        </div>
        ${buildItemRows(state)}
      </section>

      <section class="packaging-itemcentric__packages">
        <div class="packaging-itemcentric__packages-head">
          <strong>Packaging for the groups you’re using</strong>
          <span>Only non-empty packages appear here. Choose Standard or Gift Packaging once for each actual package.</span>
        </div>
        ${buildPackageRows(state)}
      </section>
    `;
    return node;
  };

  const placeCompactCustom = (state) => {
    groupsHost.classList.add('is-itemcentric-custom');
    groupsHost.querySelector('[data-itemcentric-custom]')?.remove();

    const compact = buildCompactCustom(state);
    const mobileInline = groupsHost.querySelector('[data-grouping-inline-host="custom"] .packaging-grouping-inline');
    if (mobileInline) {
      mobileInline.appendChild(compact);
      return;
    }

    const controls = groupsHost.querySelector('.packaging-grouping-controls');
    if (controls) controls.insertAdjacentElement('afterend', compact);
    else groupsHost.prepend(compact);
  };

  const clearCompactCustom = () => {
    groupsHost.classList.remove('is-itemcentric-custom');
    groupsHost.querySelector('[data-itemcentric-custom]')?.remove();
  };

  const enhance = () => {
    scheduled = false;
    const state = readDraft();

    observer.disconnect();

    if (!state || state.groupingMode !== 'custom' || !Array.isArray(state.groups)) {
      clearCompactCustom();
      observer.observe(groupsHost, { childList: true, subtree: true });
      return;
    }

    if (ensureFixedPackageSlots(state)) return;

    placeCompactCustom(state);
    observer.observe(groupsHost, { childList: true, subtree: true });
  };

  const scheduleEnhance = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(enhance);
  };

  const observer = new MutationObserver(scheduleEnhance);
  observer.observe(groupsHost, { childList: true, subtree: true });

  // Enter Custom from a clean grouping baseline rather than inheriting the
  // fully separated state. Package slots are then added automatically.
  groupsHost.addEventListener('click', (event) => {
    const modeButton = event.target.closest('[data-grouping-mode="custom"]');
    if (!modeButton) return;

    const draft = readDraft();
    if (!draft || draft.groupingMode !== 'separate' || !isEveryItemAlreadySeparate(draft)) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    groupsHost.querySelector('[data-grouping-mode="together"]')?.click();
    groupsHost.querySelector('[data-grouping-mode="custom"]')?.click();
  }, true);

  groupsHost.addEventListener('click', (event) => {
    const assignment = event.target.closest('[data-itemcentric-assign-item][data-itemcentric-assign-target]');
    if (assignment) {
      const draft = readDraft();
      if (!draft) return;

      const itemKey = assignment.dataset.itemcentricAssignItem;
      const targetGroup = assignment.dataset.itemcentricAssignTarget;
      if (draft.assignments?.[itemKey] === targetGroup) return;

      withExpandedGroup(targetGroup, (groupNode) => {
        const move = groupNode.querySelector(`[data-move-item="${itemKey}"][data-target-group="${targetGroup}"]`);
        move?.click();
      });
      return;
    }

    const tierButton = event.target.closest('[data-itemcentric-tier-group][data-itemcentric-tier-value]');
    if (tierButton) {
      const groupId = tierButton.dataset.itemcentricTierGroup;
      const tier = tierButton.dataset.itemcentricTierValue;
      withExpandedGroup(groupId, (groupNode) => {
        const input = groupNode.querySelector(`[data-packaging-tier="${groupId}"][value="${tier}"]`);
        if (!input || input.checked) return;
        input.checked = true;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });
      return;
    }

    const detailsButton = event.target.closest('[data-itemcentric-details]');
    if (detailsButton) {
      const groupId = detailsButton.dataset.itemcentricDetails;
      openDetailsGroupId = openDetailsGroupId === groupId ? null : groupId;
      scheduleEnhance();
    }
  });

  groupsHost.addEventListener('input', (event) => {
    const field = event.target.closest('[data-itemcentric-meta][data-itemcentric-meta-group]');
    if (!field) return;

    const groupId = field.dataset.itemcentricMetaGroup;
    const key = field.dataset.itemcentricMeta;
    withExpandedGroup(groupId, (groupNode) => {
      const target = key === 'giftMessage'
        ? groupNode.querySelector(`[data-gift-message="${groupId}"]`)
        : groupNode.querySelector(`[data-personalized-name="${groupId}"]`);
      if (!target) return;
      target.value = field.value;
      target.dispatchEvent(new Event('input', { bubbles: true }));
    });
  });

  groupsHost.addEventListener('click', () => window.setTimeout(scheduleEnhance, 0));
  groupsHost.addEventListener('change', () => window.setTimeout(scheduleEnhance, 0));

  scheduleEnhance();
})();
