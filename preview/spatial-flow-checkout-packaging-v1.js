(() => {
  'use strict';

  const STORAGE_KEY = 'spatialFlowCheckoutPrototype';
  const GIFT_FEE = 9;
  const SUBTOTAL = 329;

  const readState = () => {
    try {
      return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    } catch (error) {
      return {};
    }
  };

  const writeState = (nextState) => {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  };

  const workspace = document.querySelector('[data-packaging-workspace]');
  const groupsHost = document.querySelector('[data-packaging-groups]');
  const customizeButton = document.querySelector('[data-packaging-customize]');
  const addGroupButton = document.querySelector('[data-packaging-add-group]');
  const shippingForm = document.querySelector('[data-shipping-form]');
  const primaryTierInputs = [...document.querySelectorAll('[data-packaging-primary-tier]')];
  const standardPrimaryMeta = document.querySelector('[data-standard-primary-meta]');
  const giftPrimaryMeta = document.querySelector('[data-gift-primary-meta]');
  const primaryPersonalizedName = document.querySelector('[data-primary-personalized-name]');
  const primaryGiftMessage = document.querySelector('[data-primary-gift-message]');
  const workspaceTitle = document.querySelector('.packaging-workspace-head h3');
  const workspaceCopy = document.querySelector('.packaging-workspace-head p');

  if (!workspace || !groupsHost || !customizeButton || !primaryTierInputs.length) return;

  const items = [...document.querySelectorAll('[data-packaging-source-item]')].map((node) => ({
    key: node.dataset.itemKey,
    name: node.dataset.itemName,
    meta: node.dataset.itemMeta
  }));

  const initialTier = () => {
    const selected = primaryTierInputs.find((input) => input.checked);
    return selected?.value === 'gift' ? 'gift' : 'standard';
  };

  let state = readState().packagingDraft || {
    customized: false,
    groupingMode: 'together',
    groups: [{
      id: 'package-1',
      tier: initialTier(),
      personalizedName: '',
      giftMessage: ''
    }],
    assignments: Object.fromEntries(items.map((item) => [item.key, 'package-1']))
  };

  let workspaceOpen = Boolean(state.customized);
  let expandedGroupId = null;

  const inferGroupingMode = () => {
    if (['together', 'separate', 'custom'].includes(state.groupingMode)) return state.groupingMode;
    if (!state.customized || state.groups.length <= 1) return 'together';

    const nonEmptyGroups = state.groups.filter((group) => items.some((item) => state.assignments[item.key] === group.id));
    const everyItemSeparate = nonEmptyGroups.length === items.length && nonEmptyGroups.every((group) => (
      items.filter((item) => state.assignments[item.key] === group.id).length === 1
    ));

    return everyItemSeparate ? 'separate' : 'custom';
  };

  const normalizeState = () => {
    if (!Array.isArray(state.groups) || !state.groups.length) {
      state.groups = [{ id: 'package-1', tier: 'standard', personalizedName: '', giftMessage: '' }];
    }

    state.groups = state.groups.map((group, index) => ({
      id: group.id || `package-${index + 1}`,
      tier: group.tier === 'gift' ? 'gift' : 'standard',
      personalizedName: group.personalizedName || '',
      giftMessage: group.giftMessage || ''
    }));

    if (!state.assignments || typeof state.assignments !== 'object') state.assignments = {};

    const validIds = new Set(state.groups.map((group) => group.id));
    const fallbackId = state.groups[0].id;
    items.forEach((item) => {
      if (!validIds.has(state.assignments[item.key])) state.assignments[item.key] = fallbackId;
    });

    state.groupingMode = inferGroupingMode();
    state.customized = state.groupingMode !== 'together';

    if (expandedGroupId && !validIds.has(expandedGroupId)) expandedGroupId = null;
  };

  const persistDraft = () => {
    normalizeState();
    const current = readState();
    writeState({ ...current, packagingDraft: state });
  };

  const getShippingPrice = () => {
    const checkoutState = readState();
    const shipping = checkoutState.shippingDraft || checkoutState.shipping || {};
    return Number(shipping.price || 0);
  };

  const giftGroupCount = () => state.groups.filter((group) => {
    const hasItems = items.some((item) => state.assignments[item.key] === group.id);
    return hasItems && group.tier === 'gift';
  }).length;

  const updateTotals = () => {
    const packagingFee = giftGroupCount() * GIFT_FEE;
    const shippingPrice = getShippingPrice();
    const packagingRow = document.querySelector('[data-packaging-summary-row]');
    const packagingValue = document.querySelector('[data-packaging-summary-value]');
    const totalValue = document.querySelector('[data-total-value]');

    if (packagingRow && packagingValue) {
      packagingRow.classList.toggle('is-visible', packagingFee > 0);
      packagingValue.textContent = packagingFee > 0 ? `$${packagingFee.toFixed(2)}` : 'Included';
    }

    if (totalValue) totalValue.textContent = `$${(SUBTOTAL + shippingPrice + packagingFee).toFixed(2)}`;
  };

  const nextGroupId = () => {
    const numbers = state.groups
      .map((group) => Number(String(group.id).replace(/\D/g, '')))
      .filter(Number.isFinite);
    return `package-${Math.max(0, ...numbers) + 1}`;
  };

  const packageLabel = (groupId) => {
    const index = state.groups.findIndex((group) => group.id === groupId);
    return `Package ${String(Math.max(0, index) + 1).padStart(2, '0')}`;
  };

  const renderPrimaryChoice = () => {
    normalizeState();
    const singlePackageMode = state.groupingMode === 'together' && state.groups.length === 1;
    const firstGroup = state.groups[0];

    primaryTierInputs.forEach((input) => {
      input.disabled = !singlePackageMode;
      input.checked = singlePackageMode && input.value === firstGroup.tier;
    });

    if (standardPrimaryMeta) standardPrimaryMeta.hidden = !singlePackageMode || firstGroup.tier !== 'standard';
    if (giftPrimaryMeta) giftPrimaryMeta.hidden = !singlePackageMode || firstGroup.tier !== 'gift';

    if (primaryPersonalizedName && primaryPersonalizedName.value !== firstGroup.personalizedName) {
      primaryPersonalizedName.value = firstGroup.personalizedName;
    }
    if (primaryGiftMessage && primaryGiftMessage.value !== firstGroup.giftMessage) {
      primaryGiftMessage.value = firstGroup.giftMessage;
    }
  };

  const resetToTogether = (tier = state.groups[0]?.tier || 'standard') => {
    const first = state.groups[0] || {};
    state = {
      customized: false,
      groupingMode: 'together',
      groups: [{
        id: 'package-1',
        tier: tier === 'gift' ? 'gift' : 'standard',
        personalizedName: first.personalizedName || '',
        giftMessage: first.giftMessage || ''
      }],
      assignments: Object.fromEntries(items.map((item) => [item.key, 'package-1']))
    };
    expandedGroupId = null;
  };

  const setEachItemSeparate = () => {
    const defaultTier = state.groups[0]?.tier || initialTier();
    state = {
      customized: true,
      groupingMode: 'separate',
      groups: items.map((item, index) => ({
        id: `package-${index + 1}`,
        tier: defaultTier,
        personalizedName: '',
        giftMessage: ''
      })),
      assignments: Object.fromEntries(items.map((item, index) => [item.key, `package-${index + 1}`]))
    };
    expandedGroupId = null;
  };

  const setCustomGrouping = () => {
    normalizeState();
    if (state.groupingMode === 'custom') return;

    if (state.groupingMode === 'separate' && state.groups.length > 1) {
      state.groupingMode = 'custom';
      state.customized = true;
      expandedGroupId = null;
      return;
    }

    const defaultTier = state.groups[0]?.tier || initialTier();
    const first = state.groups[0] || {};
    state = {
      customized: true,
      groupingMode: 'custom',
      groups: [
        {
          id: 'package-1',
          tier: defaultTier,
          personalizedName: first.personalizedName || '',
          giftMessage: first.giftMessage || ''
        },
        {
          id: 'package-2',
          tier: defaultTier,
          personalizedName: '',
          giftMessage: ''
        }
      ],
      assignments: Object.fromEntries(items.map((item) => [item.key, 'package-1']))
    };
    expandedGroupId = 'package-2';
  };

  const applyGroupingMode = (mode) => {
    if (mode === 'together') resetToTogether(state.groups[0]?.tier || initialTier());
    else if (mode === 'separate') setEachItemSeparate();
    else setCustomGrouping();

    workspaceOpen = true;
    render();
  };

  const renderGroupingModes = () => {
    const mode = state.groupingMode;
    const count = items.length;
    const wrapper = document.createElement('section');
    wrapper.className = 'packaging-grouping-controls';
    wrapper.innerHTML = `
      <div class="packaging-grouping-intro">
        <strong>How should these items be packaged?</strong>
        <span>Choose the result you want. We’ll create the right number of packages automatically.</span>
      </div>
      <div class="packaging-grouping-modes" role="radiogroup" aria-label="How should these items be packaged?">
        <button type="button" class="packaging-grouping-mode${mode === 'together' ? ' is-selected' : ''}" data-grouping-mode="together">
          <span class="packaging-grouping-mode__title">Keep together</span>
          <span class="packaging-grouping-mode__meta">1 package</span>
          <span class="packaging-grouping-mode__copy">All items share one package.</span>
        </button>
        <button type="button" class="packaging-grouping-mode${mode === 'separate' ? ' is-selected' : ''}" data-grouping-mode="separate">
          <span class="packaging-grouping-mode__title">Package separately</span>
          <span class="packaging-grouping-mode__meta">${count} packages</span>
          <span class="packaging-grouping-mode__copy">One package per item.</span>
        </button>
        <button type="button" class="packaging-grouping-mode${mode === 'custom' ? ' is-selected' : ''}" data-grouping-mode="custom">
          <span class="packaging-grouping-mode__title">Custom grouping</span>
          <span class="packaging-grouping-mode__meta">Choose groups</span>
          <span class="packaging-grouping-mode__copy">Decide which items stay together.</span>
        </button>
      </div>
    `;
    return wrapper;
  };

  const renderCustomManager = () => {
    if (state.groupingMode !== 'custom') return null;
    const manager = document.createElement('section');
    manager.className = 'packaging-custom-manager';
    manager.innerHTML = `
      <div>
        <strong>Your custom packaging plan</strong>
        <span>Each row below is one physical product package. Open a package only when you want to edit it.</span>
      </div>
      <button type="button" class="packaging-custom-manager__add" data-custom-add-package>+ New package</button>
    `;
    return manager;
  };

  const renderItemPicker = (group) => {
    if (state.groupingMode !== 'custom' || expandedGroupId !== group.id) return '';

    const rows = items.map((item) => {
      const currentGroup = state.assignments[item.key];
      const isHere = currentGroup === group.id;
      return `
        <div class="packaging-package-picker__row">
          <div>
            <strong>${item.name}</strong>
            <span>${item.meta}</span>
          </div>
          ${isHere
            ? `<span class="packaging-package-picker__status">✓ In this package</span>`
            : `<button type="button" class="packaging-package-picker__move" data-move-item="${item.key}" data-target-group="${group.id}">Move here</button>`}
        </div>
      `;
    }).join('');

    return `
      <div class="packaging-package-picker">
        <div class="packaging-package-picker__head">
          <strong>Items in ${packageLabel(group.id)}</strong>
          <span>Move an item here to place it in this package. It will leave its previous package automatically.</span>
        </div>
        <div class="packaging-package-picker__list">${rows}</div>
      </div>
    `;
  };

  const renderGroup = (group, index) => {
    const assignedItems = items.filter((item) => state.assignments[item.key] === group.id);
    const isExpanded = expandedGroupId === group.id;
    const groupNode = document.createElement('section');
    groupNode.className = `packaging-group${group.tier === 'gift' ? ' is-gift' : ''}${isExpanded ? ' is-expanded' : ''}`;
    groupNode.dataset.groupId = group.id;

    const itemNames = assignedItems.length
      ? assignedItems.map((item) => item.name).join(' · ')
      : 'No items assigned yet';
    const itemCount = `${assignedItems.length} item${assignedItems.length === 1 ? '' : 's'}`;
    const tierLabel = group.tier === 'gift' ? 'Gift Packaging' : 'Standard Packaging';
    const feeLabel = group.tier === 'gift' ? `+$${GIFT_FEE.toFixed(2)}` : 'Included';

    const metadataMarkup = group.tier === 'gift'
      ? `
        <div class="packaging-meta">
          <label>
            Gift card message
            <textarea maxlength="240" data-gift-message="${group.id}" placeholder="Write the message to include with this gift.">${group.giftMessage || ''}</textarea>
          </label>
          <p class="packaging-meta__hint">This message belongs only to this gift package.</p>
        </div>`
      : `
        <div class="packaging-meta">
          <label>
            Name on package
            <input maxlength="24" data-personalized-name="${group.id}" value="${group.personalizedName || ''}" placeholder="Optional name for this package" />
          </label>
          <p class="packaging-meta__hint">Optional and included with Standard Packaging.</p>
        </div>`;

    const expandedMarkup = isExpanded
      ? `
        <div class="packaging-group__details">
          <div class="packaging-tier-switch" role="radiogroup" aria-label="Packaging type for package ${index + 1}">
            <label class="packaging-tier-option">
              <input type="radio" name="tier-${group.id}" value="standard" data-packaging-tier="${group.id}"${group.tier === 'standard' ? ' checked' : ''} />
              <span>
                <strong>Standard</strong>
                <span>Protective everyday packaging. Included.</span>
              </span>
            </label>
            <label class="packaging-tier-option">
              <input type="radio" name="tier-${group.id}" value="gift" data-packaging-tier="${group.id}"${group.tier === 'gift' ? ' checked' : ''} />
              <span>
                <strong>Gift</strong>
                <span>Gift-ready packaging with a card message.</span>
              </span>
            </label>
          </div>
          ${renderItemPicker(group)}
          ${metadataMarkup}
          ${state.groupingMode === 'custom' && state.groups.length > 1 && !assignedItems.length
            ? `<button type="button" class="packaging-remove-group" data-packaging-remove="${group.id}">Remove empty package</button>`
            : ''}
        </div>
      `
      : '';

    groupNode.innerHTML = `
      <div class="packaging-group__summary">
        <div class="packaging-group__summary-id">
          <span>Product package · ${String(index + 1).padStart(2, '0')}</span>
          <strong>Package ${String(index + 1).padStart(2, '0')}</strong>
        </div>
        <div class="packaging-group__summary-items">
          <span>${itemNames}</span>
          <small>${itemCount}</small>
        </div>
        <div class="packaging-group__summary-tier">
          <span>${tierLabel}</span>
          <strong>${feeLabel}</strong>
        </div>
        <button type="button" class="packaging-group__edit" data-toggle-package="${group.id}" aria-expanded="${isExpanded ? 'true' : 'false'}">
          ${isExpanded ? 'Close' : 'Edit'}
        </button>
      </div>
      ${expandedMarkup}
    `;

    return groupNode;
  };

  const renderWorkspace = () => {
    if (workspaceTitle) workspaceTitle.textContent = 'Set up separate packaging.';
    if (workspaceCopy) workspaceCopy.textContent = 'Choose how the order should be split. Package details stay compact until you open one to edit it.';
    if (addGroupButton) addGroupButton.hidden = true;

    const nodes = [renderGroupingModes()];

    if (state.groupingMode === 'together') {
      const note = document.createElement('div');
      note.className = 'packaging-together-note';
      note.textContent = 'Everything will use the packaging choice above. No separate package setup is needed.';
      nodes.push(note);
    } else {
      const customManager = renderCustomManager();
      if (customManager) nodes.push(customManager);
      state.groups.forEach((group, index) => nodes.push(renderGroup(group, index)));
    }

    groupsHost.replaceChildren(...nodes);
  };

  const render = () => {
    normalizeState();
    workspace.classList.toggle('is-open', workspaceOpen);
    customizeButton.setAttribute('aria-expanded', workspaceOpen ? 'true' : 'false');
    customizeButton.textContent = workspaceOpen ? 'Close separate packaging options' : 'Package some items separately';

    renderPrimaryChoice();
    renderWorkspace();
    persistDraft();
    updateTotals();
  };

  primaryTierInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (!input.checked) return;
      resetToTogether(input.value);
      workspaceOpen = false;
      render();
    });
  });

  primaryPersonalizedName?.addEventListener('input', () => {
    normalizeState();
    state.groups[0].personalizedName = primaryPersonalizedName.value;
    persistDraft();
  });

  primaryGiftMessage?.addEventListener('input', () => {
    normalizeState();
    state.groups[0].giftMessage = primaryGiftMessage.value;
    persistDraft();
  });

  customizeButton.addEventListener('click', () => {
    workspaceOpen = !workspaceOpen;
    render();
  });

  groupsHost.addEventListener('click', (event) => {
    const modeButton = event.target.closest('[data-grouping-mode]');
    if (modeButton) {
      applyGroupingMode(modeButton.dataset.groupingMode);
      return;
    }

    const addPackage = event.target.closest('[data-custom-add-package]');
    if (addPackage) {
      const id = nextGroupId();
      const defaultTier = state.groups[0]?.tier || 'standard';
      state.groupingMode = 'custom';
      state.customized = true;
      state.groups.push({ id, tier: defaultTier, personalizedName: '', giftMessage: '' });
      expandedGroupId = id;
      render();
      return;
    }

    const togglePackage = event.target.closest('[data-toggle-package]');
    if (togglePackage) {
      expandedGroupId = expandedGroupId === togglePackage.dataset.togglePackage ? null : togglePackage.dataset.togglePackage;
      render();
      return;
    }

    const moveItem = event.target.closest('[data-move-item][data-target-group]');
    if (moveItem) {
      state.groupingMode = 'custom';
      state.customized = true;
      state.assignments[moveItem.dataset.moveItem] = moveItem.dataset.targetGroup;
      expandedGroupId = moveItem.dataset.targetGroup;
      render();
      return;
    }

    const remove = event.target.closest('[data-packaging-remove]');
    if (remove) {
      const id = remove.dataset.packagingRemove;
      const containsItems = items.some((item) => state.assignments[item.key] === id);
      if (containsItems) return;

      state.groups = state.groups.filter((group) => group.id !== id);
      if (expandedGroupId === id) expandedGroupId = null;
      if (state.groups.length <= 1) resetToTogether(state.groups[0]?.tier || 'standard');
      render();
    }
  });

  groupsHost.addEventListener('change', (event) => {
    const tier = event.target.closest('[data-packaging-tier]');
    if (!tier) return;
    const group = state.groups.find((candidate) => candidate.id === tier.dataset.packagingTier);
    if (group) group.tier = tier.value;
    render();
  });

  groupsHost.addEventListener('input', (event) => {
    const personalizedName = event.target.closest('[data-personalized-name]');
    if (personalizedName) {
      const group = state.groups.find((candidate) => candidate.id === personalizedName.dataset.personalizedName);
      if (group) group.personalizedName = personalizedName.value;
      persistDraft();
      return;
    }

    const giftMessage = event.target.closest('[data-gift-message]');
    if (giftMessage) {
      const group = state.groups.find((candidate) => candidate.id === giftMessage.dataset.giftMessage);
      if (group) group.giftMessage = giftMessage.value;
      persistDraft();
    }
  });

  document.querySelectorAll('[data-shipping-option]').forEach((option) => {
    option.addEventListener('click', () => window.setTimeout(updateTotals, 0));
  });

  shippingForm?.addEventListener('submit', () => {
    normalizeState();
    const current = readState();
    writeState({ ...current, packaging: state, packagingDraft: state });
  });

  render();
})();