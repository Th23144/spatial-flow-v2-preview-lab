(() => {
  'use strict';

  const STORAGE_KEY = 'spatialFlowCheckoutPrototype';
  const SUBTOTAL = 329;
  const HASH_PATTERN = /^[a-fA-F0-9]{64}$/;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const BOOTSTRAP_DELAY = prefersReducedMotion ? 450 : 1500;

  const workspace = document.querySelector('[data-crypto-workspace]');
  if (!workspace) return;

  const notice = document.querySelector('[data-checkout-notice]');
  const preparingPanel = workspace.querySelector('[data-invoice-preparing]');
  const failedPanel = workspace.querySelector('[data-invoice-failed]');
  const readyContent = workspace.querySelector('[data-invoice-ready-content]');
  const retryButton = workspace.querySelector('[data-invoice-retry]');
  const amountOutput = workspace.querySelector('[data-crypto-amount]');
  const transferCompleteButton = workspace.querySelector('[data-transfer-complete]');
  const hashForm = workspace.querySelector('[data-crypto-hash-form]');
  const hashInput = workspace.querySelector('[data-crypto-hash-input]');
  const hashError = workspace.querySelector('[data-crypto-hash-error]');
  const refreshButton = workspace.querySelector('[data-refresh-status]');
  const recoveryButton = workspace.querySelector('[data-copy-recovery]');
  const statusTitle = workspace.querySelector('[data-workspace-status-title]');
  const statusMessage = workspace.querySelector('[data-workspace-status-message]');
  const summaryPaymentState = document.querySelector('[data-summary-payment-state]');
  const summaryPaymentMessage = document.querySelector('[data-summary-payment-message]');
  const summaryPaymentFact = document.querySelector('[data-summary-payment-fact]');

  const query = new URLSearchParams(window.location.search);
  const previewBootstrapFailure = query.get('prototype_invoice') === 'fail';
  const confirmedResultRoute = 'spatial-flow-thank-you-v1.html?prototype_result=confirmed';

  let noticeTimer = null;
  let bootstrapTimer = null;
  let resultBridgeObserver = null;

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

  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const helper = document.createElement('textarea');
    helper.value = text;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.append(helper);
    helper.select();
    const copied = document.execCommand('copy');
    helper.remove();

    if (!copied) {
      throw new Error('Copy failed');
    }
  };

  const getOrderTotal = () => {
    const shippingPrice = Number(readState().shipping?.price || 0);
    return SUBTOTAL + shippingPrice;
  };

  const hydrateTotals = () => {
    const total = getOrderTotal();
    const formatted = `$${total.toFixed(2)}`;

    document.querySelectorAll('[data-total-value]').forEach((node) => {
      node.textContent = formatted;
    });

    document.querySelectorAll('[data-shipping-value]').forEach((node) => {
      const shipping = readState().shipping || {};
      const price = Number(shipping.price || 0);
      node.textContent = shipping.displayPrice || (price === 0 ? 'Free' : `$${price.toFixed(2)}`);
    });

    if (amountOutput) {
      amountOutput.textContent = `${total.toFixed(2)} USDT`;
    }
  };

  const setHashError = (message = '') => {
    if (!hashError) return;

    hashError.textContent = message;
    hashError.hidden = !message;
    hashInput?.setAttribute('aria-invalid', String(Boolean(message)));
  };

  const openHashForm = (focusInput = false) => {
    if (!hashForm || !transferCompleteButton) return;

    hashForm.hidden = false;
    transferCompleteButton.setAttribute('aria-expanded', 'true');
    if (focusInput) hashInput?.focus();
  };

  const closeHashForm = () => {
    if (!hashForm || !transferCompleteButton) return;

    hashForm.hidden = true;
    transferCompleteButton.setAttribute('aria-expanded', 'false');
    setHashError('');
  };

  const persistWorkspaceDraft = (partial) => {
    const current = readState();
    writeState({
      ...current,
      cryptoWorkspaceDraft: {
        ...(current.cryptoWorkspaceDraft || {}),
        ...partial,
        prototypeOnly: true
      }
    });
  };

  const setSummaryState = (state) => {
    const summary = {
      preparing: {
        title: 'Preparing payment',
        message: 'The secure invoice is being created or restored. Payment details are not available yet.',
        fact: 'Preparing invoice'
      },
      failed: {
        title: 'Payment setup unavailable',
        message: 'No payment details were issued. Retry the invoice request or return to the payment methods.',
        fact: 'Invoice unavailable'
      },
      ready: {
        title: 'Payment pending',
        message: 'The order is reserved. Fulfilment begins only after server-confirmed payment.',
        fact: 'Waiting for payment'
      }
    }[state];

    if (!summary) return;
    if (summaryPaymentState) summaryPaymentState.textContent = summary.title;
    if (summaryPaymentMessage) summaryPaymentMessage.textContent = summary.message;
    if (summaryPaymentFact) summaryPaymentFact.textContent = summary.fact;
  };

  const setBootstrapState = (state) => {
    workspace.dataset.invoiceBootstrapState = state;
    workspace.classList.toggle('is-preparing', state === 'preparing');
    workspace.classList.toggle('is-bootstrap-failed', state === 'failed');
    workspace.classList.toggle('is-invoice-ready', state === 'ready');
    workspace.setAttribute('aria-busy', String(state === 'preparing'));

    if (preparingPanel) preparingPanel.hidden = state !== 'preparing';
    if (failedPanel) failedPanel.hidden = state !== 'failed';
    if (readyContent) readyContent.hidden = state !== 'ready';

    setSummaryState(state);
    persistWorkspaceDraft({ invoiceBootstrapState: state });
  };

  const beginInvoiceBootstrap = ({ allowPreviewFailure = true } = {}) => {
    window.clearTimeout(bootstrapTimer);
    setBootstrapState('preparing');

    bootstrapTimer = window.setTimeout(() => {
      if (allowPreviewFailure && previewBootstrapFailure) {
        setBootstrapState('failed');
        return;
      }

      hydrateTotals();
      setBootstrapState('ready');
    }, BOOTSTRAP_DELAY);
  };

  const installConfirmedResultBridge = () => {
    if (workspace.dataset.paymentState !== 'paid_confirmed') return;

    const statePanel = workspace.querySelector('.crypto-payment-state');
    const actions = statePanel?.querySelector('[data-state-actions]');
    if (!statePanel || !actions) return;

    let resultLink = actions.querySelector('[data-s8-result-link]');
    if (!resultLink) {
      resultLink = document.createElement('a');
      resultLink.href = confirmedResultRoute;
      resultLink.textContent = 'View confirmed order result →';
      resultLink.setAttribute('data-s8-result-link', '');
      actions.append(resultLink);
    }

    actions.hidden = false;

    statePanel.querySelectorAll('[data-state-details] li').forEach((item) => {
      if (item.textContent.includes('reviewed separately in S7')) {
        item.textContent = 'Continue to the accepted Step 04 result after this server-confirmed transition.';
      }
    });
  };

  workspace.querySelectorAll('[data-copy-target]').forEach((button) => {
    button.addEventListener('click', async () => {
      if (workspace.dataset.invoiceBootstrapState !== 'ready') return;

      const targetId = button.getAttribute('data-copy-target');
      const target = targetId ? document.getElementById(targetId) : null;
      const value = target?.textContent.trim();

      if (!value) {
        showNotice('Nothing is available to copy.');
        return;
      }

      try {
        await copyText(value);
        showNotice('Copied. This is static prototype data and must not be used for a real transfer.');
      } catch (error) {
        showNotice('Copy was not available. Select the value manually.');
      }
    });
  });

  transferCompleteButton?.addEventListener('click', () => {
    if (workspace.dataset.invoiceBootstrapState !== 'ready') return;

    const isOpen = transferCompleteButton.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeHashForm();
      return;
    }

    openHashForm(true);
  });

  hashInput?.addEventListener('input', () => {
    setHashError('');
    persistWorkspaceDraft({ transactionHash: hashInput.value.trim() });
  });

  hashForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (workspace.dataset.invoiceBootstrapState !== 'ready') return;

    const hash = hashInput?.value.trim() || '';
    if (!HASH_PATTERN.test(hash)) {
      setHashError('Enter a complete 64-character hexadecimal TRON transaction hash.');
      hashInput?.focus();
      return;
    }

    persistWorkspaceDraft({
      transactionHash: hash,
      verificationRequested: true
    });

    if (statusTitle) statusTitle.textContent = 'Ready for server verification';
    if (statusMessage) {
      statusMessage.textContent = 'The static reference captured the transaction hash. A live server would now query TronGrid and return the verified payment result.';
    }

    showNotice('Static boundary reached. No TronGrid request or payment confirmation was performed.');
  });

  refreshButton?.addEventListener('click', () => {
    if (workspace.dataset.invoiceBootstrapState !== 'ready') return;
    showNotice('Static status refreshed. No server or blockchain request was made.');
  });

  recoveryButton?.addEventListener('click', async () => {
    if (workspace.dataset.invoiceBootstrapState !== 'ready') return;

    try {
      await copyText(window.location.href.split('?')[0]);
      showNotice('Static payment recovery link copied. The live link will be generated by WooCommerce order-pay.');
    } catch (error) {
      showNotice('Copy was not available. Copy the current page address manually.');
    }
  });

  retryButton?.addEventListener('click', () => {
    beginInvoiceBootstrap({ allowPreviewFailure: false });
  });

  const draft = readState().cryptoWorkspaceDraft || {};
  if (hashInput && typeof draft.transactionHash === 'string') {
    hashInput.value = draft.transactionHash;
  }

  if (draft.transactionHash) {
    openHashForm(false);
  }

  resultBridgeObserver = new MutationObserver(installConfirmedResultBridge);
  resultBridgeObserver.observe(workspace, {
    attributes: true,
    attributeFilter: ['data-payment-state'],
    childList: true,
    subtree: true
  });

  hydrateTotals();
  beginInvoiceBootstrap();
  installConfirmedResultBridge();

  window.addEventListener('pagehide', () => {
    resultBridgeObserver?.disconnect();
    window.clearTimeout(bootstrapTimer);
    window.clearTimeout(noticeTimer);
  });
})();
