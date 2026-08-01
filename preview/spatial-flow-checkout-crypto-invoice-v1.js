(() => {
  'use strict';

  const STORAGE_KEY = 'spatialFlowCheckoutPrototype';
  const SUBTOTAL = 329;
  const HASH_PATTERN = /^[a-fA-F0-9]{64}$/;
  const workspace = document.querySelector('[data-crypto-workspace]');
  if (!workspace) return;

  const notice = document.querySelector('[data-checkout-notice]');
  const amountOutput = workspace.querySelector('[data-crypto-amount]');
  const transferCompleteButton = workspace.querySelector('[data-transfer-complete]');
  const hashForm = workspace.querySelector('[data-crypto-hash-form]');
  const hashInput = workspace.querySelector('[data-crypto-hash-input]');
  const hashError = workspace.querySelector('[data-crypto-hash-error]');
  const refreshButton = workspace.querySelector('[data-refresh-status]');
  const recoveryButton = workspace.querySelector('[data-copy-recovery]');
  const statusTitle = workspace.querySelector('[data-workspace-status-title]');
  const statusMessage = workspace.querySelector('[data-workspace-status-message]');
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

  workspace.querySelectorAll('[data-copy-target]').forEach((button) => {
    button.addEventListener('click', async () => {
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
    showNotice('Static status refreshed. No server or blockchain request was made.');
  });

  recoveryButton?.addEventListener('click', async () => {
    try {
      await copyText(window.location.href);
      showNotice('Static payment recovery link copied. The live link will be generated by WooCommerce order-pay.');
    } catch (error) {
      showNotice('Copy was not available. Copy the current page address manually.');
    }
  });

  const draft = readState().cryptoWorkspaceDraft || {};
  if (hashInput && typeof draft.transactionHash === 'string') {
    hashInput.value = draft.transactionHash;
  }

  if (draft.transactionHash) {
    openHashForm(false);
  }

  hydrateTotals();
})();
