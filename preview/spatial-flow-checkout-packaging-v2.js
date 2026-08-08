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

  if (!workspace || !groupsHost || !customizeButton || !primaryTierInputs.length) return;

  const items = [...document.querySelectorAll('[data-packaging-source-item]')].map((node) => ({
    key: node.dataset.itemKey,
    name: node.dataset.itemName,
    meta: node.dataset.itemMeta
  }));

  let state = readState().packagingDraft || {
    customized: false,
    groups: [
      {
        id: 'package-1',
        tier: 'standard',
        personalizedName: '',
        giftMessage: ''
      }
    ],
    assignments: Object.fromEntries(items.map((item) => [item.key, 'package-1']))
  };

  let workspaceOpen = Boolean(state.customized);

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

    if (!state.assignments || typeof state.assignments !== 'object') {
      state.assignments = {};
    }

    const validIds = new Set(state.groups.map((group) => group.id));
    const fallbackId = state.groups[0].id;

    items.forEach((item) => {
      if (!validIds.has(state.assignments[item.key])) state.assignments[item.key] = fallbackId;
    });
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

  const renderPrimaryChoice = () => {
    normalizeState();
    const singlePackageMode = !state.customized && state.groups.length === 1;
    const firstGroup = state.groups[0];

    primaryTierInputs.forEach((input) => {
      input.checked = singlePackageMode && input.value === firstGroup.tier;
    });

    if (standardPrimaryMeta) {
      standardPrimaryMeta.hidden = !singlePackageMode || firstGroup.tier !== 'standard';
    }

    if (giftPrimaryMeta) {
      giftPrimaryMeta.hidden = !singlePackageMode || firstGroup.tier !== 'gift';
    }

    if (primaryPersonalizedName && primaryPersonalizedName.value !== firstGroup.personalizedName) {
      primaryPersonalizedName.value = firstGroup.personalizedName;
    }

    if (primaryGiftMessage && primaryGiftMessage.value !== firstGroup.giftMessage) {
      primaryGiftMessage.value = firstGroup.giftMessage;
    }
  };

  const renderGroup = (group, index) => {
    const assignedItems = items.filter((item) => state.assignments[item.key] === group.id);
    const groupNode = document.createElement('section');
    groupNode.className = `packaging-group${group.tier === 'gift' ? ' is-gift' : ''}`;
    groupNode.dataset.groupId = group.id;

    const options = state.groups.map((candidate, optionIndex) => (
      `<option value="${candidate.id}"${candidate.id === group.id ? ' selected' : ''}>Package ${String(optionIndex + 1).padStart(2, '0')}</option>`
    )).join('');

    const itemMarkup = assignedItems.length
      ? assignedItems.map((item) => `
          <div class="packaging-item" data-packaging-item="${item.key}">
            <div>
              <strong>${item.name}</strong>
              <small>${item.meta}</small>
            </div>
            <select aria-label="Assign ${item.name} to product package" data-packaging-assignment="${item.key}">
              ${options}
            </select>
          </div>`).join('')
      : '<div class="packaging-group__empty">No items assigned to this product package yet.</div>';

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
            Personalized name
            <input maxlength="24" data-personalized-name="${group.id}" value="${group.personalizedName || ''}" placeholder="Name for this product package" />
          </label>
          <p class="packaging-meta__hint">Included with Standard Packaging in this candidate. The live feature remains admin-switchable.</p>
        </div>`;

    groupNode.innerHTML = `
      <div class="packaging-group__head">
        <div>
          <div class="packaging-group__eyebrow">Product package · ${String(index + 1).padStart(2, '0')}</div>
          <h3 class="packaging-group__title">Package ${String(index + 1).padStart(2, '0')}</h3>
        </div>
        <div class="packaging-group__fee">${group.tier === 'gift' ? `+$${GIFT_FEE.toFixed(2)}` : 'Included'}</div>
      </div>

      <div class="packaging-tier-switch" role="radiogroup" aria-label="Packaging tier for package ${index + 1}">
        <label class="packaging-tier-option">
          <input type="radio" name="tier-${group.id}" value="standard" data-packaging-tier="${group.id}"${group.tier === 'standard' ? ' checked' : ''} />
          <span>
            <strong>Standard</strong>
            <span>Quiet, protective product presentation. Included.</span>
          </span>
        </label>
        <label class="packaging-tier-option">
          <input type="radio" name="tier-${group.id}" value="gift" data-packaging-tier="${group.id}"${group.tier === 'gift' ? ' checked' : ''} />
          <span>
            <strong>Gift</strong>
            <span>Refined gifting presentation with a card message.</span>
          </span>
        </label>
      </div>

      <div class="packaging-group__items">${itemMarkup}</div>
      ${metadataMarkup}
      ${state.groups.length > 1 ? `<button type="button" class="packaging-remove-group" data-packaging-remove="${group.id}">Remove empty package</button>` : ''}
    `;

    return groupNode;
  };

  const render = () => {
    normalizeState();
    workspace.classList.toggle('is-open', workspaceOpen);
    customizeButton.setAttribute('aria-expanded', workspaceOpen ? 'true' : 'false');
    customizeButton.textContent = workspaceOpen ? 'Hide group editor' : 'Customize product groups';

    renderPrimaryChoice();
    groupsHost.replaceChildren(...state.groups.map(renderGroup));
    persistDraft();
    updateTotals();
  };

  primaryTierInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (!input.checked) return;

      const firstGroup = state.groups[0] || {};
      state = {
        customized: false,
        groups: [{
          id: 'package-1',
          tier: input.value === 'gift' ? 'gift' : 'standard',
          personalizedName: firstGroup.personalizedName || '',
          giftMessage: firstGroup.giftMessage || ''
        }],
        assignments: Object.fromEntries(items.map((item) => [item.key, 'package-1']))
      };
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
    if (workspaceOpen) state.customized = true;
    render();
  });

  addGroupButton?.addEventListener('click', () => {
    state.customized = true;
    workspaceOpen = true;
    state.groups.push({ id: nextGroupId(), tier: 'standard', personalizedName: '', giftMessage: '' });
    render();
  });

  groupsHost.addEventListener('change', (event) => {
    const assignment = event.target.closest('[data-packaging-assignment]');
    if (assignment) {
      state.customized = true;
      state.assignments[assignment.dataset.packagingAssignment] = assignment.value;
      render();
      return;
    }

    const tier = event.target.closest('[data-packaging-tier]');
    if (tier) {
      state.customized = true;
      const group = state.groups.find((candidate) => candidate.id === tier.dataset.packagingTier);
      if (group) group.tier = tier.value;
      render();
    }
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

  groupsHost.addEventListener('click', (event) => {
    const remove = event.target.closest('[data-packaging-remove]');
    if (!remove) return;

    const id = remove.dataset.packagingRemove;
    const containsItems = items.some((item) => state.assignments[item.key] === id);
    if (containsItems) return;

    state.groups = state.groups.filter((group) => group.id !== id);
    state.customized = state.groups.length > 1;
    render();
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
