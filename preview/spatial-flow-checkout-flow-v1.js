(() => {
  'use strict';

  const STORAGE_KEY = 'spatialFlowCheckoutPrototype';
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

      if (field instanceof RadioNodeList) {
        field.value = value;
        return;
      }

      if (field.type === 'checkbox') {
        field.checked = value === field.value || value === 'yes' || value === 'on';
        return;
      }

      field.value = value;
    });
  };

  const getAddressView = () => {
    const address = readState().address || {};
    const name = [address.billing_first_name, address.billing_last_name].filter(Boolean).join(' ') || 'Alex Morgan';
    const street = address.billing_address_1 || '123 Quiet Way, Apt 4B';
    const city = address.billing_city || 'Brooklyn';
    const state = address.billing_state || 'NY';
    const postcode = address.billing_postcode || '11201';
    const country = address.billing_country || 'United States';
    const email = address.billing_email || 'alex@morgan.com';
    const phone = address.billing_phone || '+1 (917) 555-0192';
    const cityLine = `${city}${state ? `, ${state}` : ''}${postcode ? ` ${postcode}` : ''}`;

    return {
      name,
      street,
      cityLine,
      country,
      email,
      phone,
      addressText: [name, street, cityLine, country].filter(Boolean).join('\n')
    };
  };

  const hydrateAddressAndContact = () => {
    const view = getAddressView();

    document.querySelectorAll('[data-address-output]').forEach((node) => {
      node.textContent = view.addressText;
    });

    document.querySelectorAll('[data-contact-email]').forEach((node) => {
      node.textContent = view.email;
    });

    document.querySelectorAll('[data-contact-phone]').forEach((node) => {
      node.textContent = view.phone;
    });
  };

  const formatShipping = (shipping) => {
    const fallback = {
      method: 'Standard tracked delivery',
      price: 0,
      displayPrice: 'Free',
      estimate: '5–7 business days'
    };

    return { ...fallback, ...(shipping || {}) };
  };

  const updateOrderTotals = (shipping) => {
    const normalized = formatShipping(shipping);
    const price = Number(normalized.price || 0);

    document.querySelectorAll('[data-shipping-value]').forEach((node) => {
      node.textContent = normalized.displayPrice || (price === 0 ? 'Free' : `$${price.toFixed(2)}`);
    });

    document.querySelectorAll('[data-total-value]').forEach((node) => {
      node.textContent = `$${(SUBTOTAL + price).toFixed(2)}`;
    });
  };

  const hydrateConfirmedShipping = () => {
    const shipping = formatShipping(readState().shipping);

    document.querySelectorAll('[data-shipping-method-output]').forEach((node) => {
      node.textContent = shipping.method;
    });

    document.querySelectorAll('[data-shipping-detail-output]').forEach((node) => {
      node.textContent = `${shipping.estimate} · ${shipping.displayPrice}`;
    });

    updateOrderTotals(shipping);
  };

  const addressForm = document.querySelector('[data-address-form]');
  if (addressForm) {
    populateForm(addressForm, readState().address || {});

    addressForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!addressForm.reportValidity()) return;

      const current = readState();
      const address = serializeForm(addressForm);
      writeState({
        ...current,
        address,
        shipping: null,
        shippingDraft: null
      });
      window.location.href = addressForm.action;
    });
  }

  hydrateAddressAndContact();

  if (document.body.classList.contains('checkout-step-payment')) {
    hydrateConfirmedShipping();
  }

  const shippingOptions = [...document.querySelectorAll('[data-shipping-option]')];
  const shippingForm = document.querySelector('[data-shipping-form]');
  let currentShippingDraft = null;

  const applyShippingSelection = (option) => {
    shippingOptions.forEach((item) => item.classList.toggle('is-selected', item === option));

    const input = option.querySelector('input[type="radio"]');
    if (input) input.checked = true;

    const method = option.dataset.method || 'Standard tracked delivery';
    const price = Number(option.dataset.price || 0);
    const displayPrice = price === 0 ? 'Free' : `$${price.toFixed(2)}`;

    currentShippingDraft = {
      method,
      price,
      displayPrice,
      estimate: option.dataset.estimate || ''
    };

    mergeState({ shippingDraft: currentShippingDraft });
    updateOrderTotals(currentShippingDraft);
  };

  if (shippingOptions.length) {
    const state = readState();
    const selectedMethod = state.shippingDraft?.method || state.shipping?.method;
    const initial = shippingOptions.find((option) => option.dataset.method === selectedMethod) || shippingOptions[0];
    applyShippingSelection(initial);

    shippingOptions.forEach((option) => {
      option.addEventListener('click', () => applyShippingSelection(option));
    });
  }

  if (shippingForm) {
    shippingForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!currentShippingDraft) {
        showNotice('Choose a shipping method before continuing.');
        return;
      }

      const next = mergeState({
        shipping: currentShippingDraft,
        shippingDraft: currentShippingDraft
      });

      if (!next.shipping) return;
      window.location.href = shippingForm.action;
    });
  }

  const paymentForm = document.querySelector('[data-payment-form]');
  if (paymentForm) {
    paymentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      mergeState({ paymentMethod: 'cryptocurrency' });

      const action = paymentForm.getAttribute('action');
      if (action && action !== '#') {
        window.location.href = action;
        return;
      }

      showNotice('The dedicated Cryptocurrency asset and network workspace is not connected. No real payment was attempted.');
    });
  }

  document.addEventListener('click', (event) => {
    const disabled = event.target.closest('[data-prototype-disabled]');
    if (!disabled) return;

    event.preventDefault();
    showNotice(disabled.getAttribute('data-prototype-disabled') || 'This prototype route is not available yet.');
  });
})();
