(() => {
  'use strict';

  const STORAGE_KEY = 'spatialFlowCheckoutPrototype';
  const form = document.querySelector('[data-payment-host]');
  if (!form) return;

  const gatewayInputs = [...form.querySelectorAll('[data-payment-gateway]')];
  const panel = form.querySelector('[data-payment-selected-panel]');
  const titleOutput = form.querySelector('[data-selected-payment-title]');
  const descriptionOutput = form.querySelector('[data-selected-payment-description]');
  const familyOutput = form.querySelector('[data-selected-payment-family]');
  const modeOutput = form.querySelector('[data-selected-payment-mode]');
  const settlementOutput = form.querySelector('[data-selected-payment-settlement]');
  const actionButton = form.querySelector('[data-payment-action]');
  const prototypeNote = form.querySelector('[data-payment-prototype-note]');
  const notice = document.querySelector('[data-checkout-notice]');
  let noticeTimer = null;

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

  const showNotice = (message) => {
    if (!notice) return;

    notice.textContent = message;
    notice.classList.add('is-visible');
    window.clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => {
      notice.classList.remove('is-visible');
    }, 4200);
  };

  const normalizeDescriptor = (input) => ({
    gatewayId: input.dataset.paymentGateway || input.value,
    customerTitle: input.dataset.customerTitle || input.value,
    customerDescription: input.dataset.customerDescription || 'WooCommerce-native payment method.',
    family: input.dataset.paymentFamily || 'other',
    presentationMode: input.dataset.presentationMode || 'native_fallback',
    actionLabel: input.dataset.actionLabel || 'Continue →',
    settlementLabel: input.dataset.settlementLabel || 'Gateway supplied',
    handoffRoute: input.dataset.handoffRoute || '',
    eligible: !input.disabled
  });

  const descriptorRegistry = new Map(
    gatewayInputs.map((input) => [input.value, normalizeDescriptor(input)])
  );

  const getSelectedInput = () => {
    return gatewayInputs.find((input) => input.checked) || gatewayInputs[0] || null;
  };

  const renderSelection = (input) => {
    if (!input) return;

    const descriptor = descriptorRegistry.get(input.value) || normalizeDescriptor(input);

    gatewayInputs.forEach((item) => {
      item.closest('.payment-method')?.classList.toggle('is-selected', item === input);
    });

    if (panel) panel.hidden = false;
    if (titleOutput) titleOutput.textContent = descriptor.customerTitle;
    if (descriptionOutput) descriptionOutput.textContent = descriptor.customerDescription;
    if (familyOutput) familyOutput.textContent = descriptor.family.replaceAll('_', ' ');
    if (modeOutput) modeOutput.textContent = descriptor.presentationMode.replaceAll('_', ' ');
    if (settlementOutput) settlementOutput.textContent = descriptor.settlementLabel;
    if (actionButton) actionButton.textContent = descriptor.actionLabel;

    if (prototypeNote) {
      prototypeNote.textContent = descriptor.handoffRoute
        ? 'This static reference will continue through the selected gateway handoff.'
        : 'The Step-03 payment host is ready. The selected gateway workspace is not linked until its next approved static phase exists.';
    }
  };

  const storedGatewayId = readState().paymentHostSelection?.gatewayId;
  const storedInput = gatewayInputs.find((input) => {
    const descriptor = descriptorRegistry.get(input.value);
    return descriptor?.gatewayId === storedGatewayId;
  });

  if (storedInput) {
    storedInput.checked = true;
  }

  gatewayInputs.forEach((input) => {
    input.addEventListener('change', () => renderSelection(input));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedInput = getSelectedInput();
    if (!selectedInput) {
      showNotice('Choose an available payment method before continuing.');
      return;
    }

    const descriptor = descriptorRegistry.get(selectedInput.value) || normalizeDescriptor(selectedInput);
    const current = readState();

    writeState({
      ...current,
      paymentMethod: descriptor.gatewayId,
      paymentHostSelection: {
        gatewayId: descriptor.gatewayId,
        customerTitle: descriptor.customerTitle,
        family: descriptor.family,
        presentationMode: descriptor.presentationMode,
        settlementLabel: descriptor.settlementLabel,
        prototypeOnly: true
      }
    });

    if (descriptor.handoffRoute && descriptor.handoffRoute !== '#') {
      window.location.href = descriptor.handoffRoute;
      return;
    }

    showNotice('Payment host handoff recorded. The dedicated Crypto Invoice / Waiting workspace is the next approved static phase and is not linked yet.');
  });

  renderSelection(getSelectedInput());
})();
