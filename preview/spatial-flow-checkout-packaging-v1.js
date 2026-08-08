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

  const toggle = document.querySelector('[data-packaging-customize]');
  const workspace = document.querySelector('[data-packaging-workspace]');
  const groupsHost = document.querySelector('[data-packaging-groups]');
  const addGroupButton = document.querySelector('[data-packaging-add-group]');
  const shippingForm = document.querySelector('[data-shipping-form]');

  if (!toggle || !workspace || !groupsHost) return;

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

  const normalizeState = () => {
    if (!Array.isArray(state.groups) || !state.groups.length) {
      state.groups = [{ id: 'package-1', tier: 'standard', personalizedName: '', giftMessage: '' }];
    }

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
    const packagingFee = state.customized ? giftGroupCount() * GIFT_FEE : 0;
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
    workspace.classList.toggle('is-open', state.customized);
    toggle.setAttribute('aria-expanded', state.customized ? 'true' : 'false');
    toggle.textContent = state.customized ? 'Use standard default' : 'Customize packaging';

    groupsHost.replaceChildren(...state.groups.map(renderGroup));
    persistDraft();
    updateTotals();
  };

  toggle.addEventListener('click', () => {
    state.customized = !state.customized;

    if (!state.customized) {
      state.groups = [{ id: 'package-1', tier: 'standard', personalizedName: '', giftMessage: '' }];
      state.assignments = Object.fromEntries(items.map((item) => [item.key, 'package-1']));
    }

    render();
  });

  addGroupButton?.addEventListener('click', () => {
    state.customized = true;
    state.groups.push({ id: nextGroupId(), tier: 'standard', personalizedName: '', giftMessage: '' });
    render();
  });

  groupsHost.addEventListener('change', (event) => {
    const assignment = event.target.closest('[data-packaging-assignment]');
    if (assignment) {
      state.assignments[assignment.dataset.packagingAssignment] = assignment.value;
      render();
      return;
    }

    const tier = event.target.closest('[data-packaging-tier]');
    if (tier) {
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
    render();
  });

  document.querySelectorAll('[data-shipping-option]').forEach((option) => {
    option.addEventListener('click', () => window.setTimeout(updateTotals, 0));
  });

  shippingForm?.addEventListener('submit', () => {
    const current = readState();
    const committed = state.customized
      ? state
      : {
          customized: false,
          groups: [{ id: 'package-1', tier: 'standard', personalizedName: '', giftMessage: '' }],
          assignments: Object.fromEntries(items.map((item) => [item.key, 'package-1']))
        };

    writeState({ ...current, packaging: committed, packagingDraft: committed });
  });

  render();
})();
