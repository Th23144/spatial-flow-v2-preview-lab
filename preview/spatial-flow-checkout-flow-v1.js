(() => {
  'use strict';

  const STORAGE_KEY = 'spatialFlowCheckoutPrototype';

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

  const mergeState = (partial) => {
    const current = readState();
    const next = { ...current, ...partial };
    writeState(next);
    return next;
  };

  const notice = document.querySelector('[data-checkout-notice]');
  let noticeTimer = null;

  const showNotice = (message) => {
    if (!notice) return;

    notice.textContent = message;
    notice.classList.add('is-visible');
    window.clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => {
      notice.classList.remove('is-visible');
    }, 3600);
  };

  const serializeForm = (form) => {
    const data = new FormData(form);
    return Object.fromEntries(data.entries());
  };

  const populateForm = (form, state) => {
    Object.entries(state).forEach(([name, value]) => {
      const field = form.elements.namedItem(name);
      if (!field || typeof value !== 'string') return;
      field.value = value;
    });
  };

  const addressForm = document.querySelector('[data-address-form]');
  if (addressForm) {
    populateForm(addressForm, readState().address || {});

    addressForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!addressForm.reportValidity()) return;

      const address = serializeForm(addressForm);
      mergeState({ address });
      window.location.href = addressForm.action;
    });
  }

  const addressOutput = document.querySelector('[data-address-output]');
  if (addressOutput) {
    const address = readState().address || {};
    const name = [address.billing_first_name, address.billing_last_name].filter(Boolean).join(' ') || 'Alex Morgan';
    const street = address.billing_address_1 || '123 Quiet Way, Apt 4B';
    const city = address.billing_city || 'Brooklyn';
    const postcode = address.billing_postcode || 'NY 11201';
    const country = address.billing_country || 'United States';

    addressOutput.innerHTML = `${name}<br>${street}<br>${city}, ${postcode}<br>${country}`;
  }

  const shippingOptions = [...document.querySelectorAll('[data-shipping-option]')];
  const shippingValue = document.querySelector('[data-shipping-value]');
  const totalValue = document.querySelector('[data-total-value]');
  const shippingForm = document.querySelector('[data-shipping-form]');

  const applyShippingSelection = (option) => {
    shippingOptions.forEach((item) => item.classList.toggle('is-selected', item === option));

    const input = option.querySelector('input[type="radio"]');
    if (input) input.checked = true;

    const method = option.dataset.method || 'Standard tracked delivery';
    const price = Number(option.dataset.price || 0);
    const displayPrice = price === 0 ? 'Free' : `$${price.toFixed(2)}`;
    const subtotal = 329;

    if (shippingValue) shippingValue.textContent = displayPrice;
    if (totalValue) totalValue.textContent = `$${(subtotal + price).toFixed(2)}`;

    mergeState({
      shipping: {
        method,
        price,
        displayPrice,
        estimate: option.dataset.estimate || ''
      }
    });
  };

  if (shippingOptions.length) {
    const state = readState();
    const selectedMethod = state.shipping?.method;
    const initial = shippingOptions.find((option) => option.dataset.method === selectedMethod) || shippingOptions[0];
    applyShippingSelection(initial);

    shippingOptions.forEach((option) => {
      option.addEventListener('click', () => applyShippingSelection(option));
    });
  }

  if (shippingForm) {
    shippingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      showNotice('Step 03 Payment will be linked in the next bounded build phase. Your prototype shipping choice has been saved for this browser session.');
    });
  }

  document.addEventListener('click', (event) => {
    const disabled = event.target.closest('[data-prototype-disabled]');
    if (!disabled) return;

    event.preventDefault();
    showNotice(disabled.getAttribute('data-prototype-disabled') || 'This prototype route is not available yet.');
  });
})();
