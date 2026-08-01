(() => {
  'use strict';

  const workspace = document.querySelector('[data-crypto-workspace]');
  if (!workspace) return;

  const query = new URLSearchParams(window.location.search);
  const requestedState = query.get('prototype_payment');
  if (!requestedState) return;

  const requestedReason = query.get('reason') || 'receiver_mismatch';
  const readyContent = workspace.querySelector('[data-invoice-ready-content]');
  const statusCard = workspace.querySelector('[data-workspace-status-card]');
  const statusTitle = workspace.querySelector('[data-workspace-status-title]');
  const statusMessage = workspace.querySelector('[data-workspace-status-message]');
  const statusBadge = statusCard?.querySelector('.crypto-workspace-status__badge');
  const invoicePanel = workspace.querySelector('.crypto-invoice-panel');
  const transferPanel = workspace.querySelector('.crypto-transfer-panel');
  const verificationPanel = workspace.querySelector('.crypto-verification-panel');
  const toolsPanel = workspace.querySelector('.crypto-workspace-tools');
  const transferCompleteButton = workspace.querySelector('[data-transfer-complete]');
  const hashForm = workspace.querySelector('[data-crypto-hash-form]');
  const hashInput = workspace.querySelector('[data-crypto-hash-input]');
  const notice = document.querySelector('[data-checkout-notice]');
  const summaryPaymentState = document.querySelector('[data-summary-payment-state]');
  const summaryPaymentMessage = document.querySelector('[data-summary-payment-message]');
  const summaryPaymentFact = document.querySelector('[data-summary-payment-fact]');

  const SUPPORTED_STATES = new Set([
    'verification_failed',
    'temporary_error',
    'manual_review',
    'cancelled',
    'paid_confirmed',
    'recovered'
  ]);

  if (!SUPPORTED_STATES.has(requestedState)) return;

  const FAILURE_REASONS = {
    receiver_mismatch: {
      title: 'Receiving address did not match',
      message: 'This transaction was sent to a different receiving address than the one assigned to this invoice.',
      details: [
        'Do not reuse this transaction hash for another order.',
        'Review the invoice address before making another transfer.',
        'The WooCommerce order remains on hold and is not marked paid.'
      ]
    },
    old_transaction: {
      title: 'Transaction predates this invoice',
      message: 'This transaction was completed before this invoice was created and cannot be used to confirm this order.',
      details: [
        'Submit a transaction created after the current invoice time.',
        'The existing order and invoice remain active.',
        'No duplicate order or replacement invoice is created.'
      ]
    },
    wrong_token: {
      title: 'Required USDT transfer not found',
      message: 'This transaction does not contain the required USDT transfer on the TRON / TRC20 network.',
      details: [
        'Confirm that the asset is USDT and the network is TRON / TRC20.',
        'Do not send another asset or use another blockchain network.',
        'Submit a different transaction hash after completing the correct transfer.'
      ]
    },
    no_transfer: {
      title: 'Qualifying USDT transfer not found',
      message: 'The transaction was located, but it did not contain a qualifying USDT transfer for this invoice.',
      details: [
        'Check the asset, receiving address and network in your wallet history.',
        'The order remains on hold.',
        'A different valid transaction hash may be submitted.'
      ]
    },
    amount_too_low: {
      title: 'Transferred amount is too low',
      message: 'The transferred USDT amount is lower than the exact amount required by this invoice.',
      details: [
        'Review the invoice amount before making another transfer.',
        'The first-phase gateway does not automatically combine partial payments.',
        'The order remains on hold until a valid payment is confirmed.'
      ]
    },
    duplicate_tx: {
      title: 'Transaction already used',
      message: 'This transaction has already been used to verify another order and cannot be applied again.',
      details: [
        'Check that you copied the transaction hash from the transfer for this order.',
        'Do not submit the same transaction to multiple orders.',
        'Use a different valid transaction hash for this invoice.'
      ]
    }
  };

  let noticeTimer = null;
  let statePanel = null;
  let primaryAction = null;
  let secondaryAction = null;

  const showNotice = (message) => {
    if (!notice) return;

    notice.textContent = message;
    notice.classList.add('is-visible');
    window.clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => {
      notice.classList.remove('is-visible');
    }, 4200);
  };

  const setSummary = ({ title, message, fact }) => {
    if (summaryPaymentState) summaryPaymentState.textContent = title;
    if (summaryPaymentMessage) summaryPaymentMessage.textContent = message;
    if (summaryPaymentFact) summaryPaymentFact.textContent = fact;
  };

  const setStatus = ({ state, title, message, badge }) => {
    if (statusCard) statusCard.dataset.paymentState = state;
    if (statusTitle) statusTitle.textContent = title;
    if (statusMessage) statusMessage.textContent = message;
    if (statusBadge) statusBadge.textContent = badge;
  };

  const setPanelVisibility = ({ invoice = true, transfer = true, verification = true, tools = true }) => {
    if (invoicePanel) invoicePanel.hidden = !invoice;
    if (transferPanel) transferPanel.hidden = !transfer;
    if (verificationPanel) verificationPanel.hidden = !verification;
    if (toolsPanel) toolsPanel.hidden = !tools;
  };

  const ensureStatePanel = () => {
    if (statePanel || !statusCard) return statePanel;

    statePanel = document.createElement('section');
    statePanel.className = 'crypto-payment-state';
    statePanel.hidden = true;
    statePanel.setAttribute('aria-live', 'polite');
    statePanel.innerHTML = `
      <div class="crypto-payment-state__mark" aria-hidden="true" data-state-mark>!</div>
      <div>
        <span class="crypto-payment-state__eyebrow" data-state-eyebrow>Payment verification</span>
        <h3 data-state-title></h3>
        <p data-state-message></p>
        <ul class="crypto-payment-state__details" data-state-details></ul>
        <div class="crypto-payment-state__actions" data-state-actions>
          <button type="button" data-state-primary></button>
          <a href="#" data-state-secondary></a>
        </div>
        <span class="crypto-payment-state__prototype">Static S6 state reference · no server, chain or order mutation occurred</span>
      </div>
    `;

    statusCard.insertAdjacentElement('afterend', statePanel);
    primaryAction = statePanel.querySelector('[data-state-primary]');
    secondaryAction = statePanel.querySelector('[data-state-secondary]');

    primaryAction?.addEventListener('click', () => {
      const action = primaryAction.dataset.action;

      if (action === 'retry_hash') {
        resetToWaiting('Submit a different TRON transaction hash for server verification.');
        if (hashInput) hashInput.value = '';
        openHashForm();
        showNotice('Static retry state opened. No verification request was sent.');
      }

      if (action === 'retry_verification') {
        resetToWaiting('The existing transaction hash can be submitted again when the verification service is available.');
        openHashForm();
        showNotice('Static verification retry boundary reached. No server request was made.');
      }

      if (action === 'dismiss_recovery') {
        resetToWaiting('Your order is reserved but not paid. Complete the transfer and submit the transaction hash below.');
      }

      if (action === 'contact_support') {
        window.location.href = 'spatial-flow-contact-v1.html';
      }
    });

    return statePanel;
  };

  const openHashForm = () => {
    if (!hashForm || !transferCompleteButton) return;

    hashForm.hidden = false;
    transferCompleteButton.setAttribute('aria-expanded', 'true');
    hashInput?.focus();
  };

  const configureActions = ({ primary = null, secondary = null }) => {
    if (primaryAction) {
      primaryAction.hidden = !primary;
      primaryAction.textContent = primary?.label || '';
      primaryAction.dataset.action = primary?.action || '';
    }

    if (secondaryAction) {
      secondaryAction.hidden = !secondary;
      secondaryAction.textContent = secondary?.label || '';
      secondaryAction.href = secondary?.href || '#';
    }

    const actions = statePanel?.querySelector('[data-state-actions]');
    if (actions) actions.hidden = !primary && !secondary;
  };

  const renderStatePanel = ({ tone, mark, eyebrow, title, message, details, primary, secondary }) => {
    const panel = ensureStatePanel();
    if (!panel) return;

    panel.className = `crypto-payment-state crypto-payment-state--${tone}`;
    panel.hidden = false;

    const markNode = panel.querySelector('[data-state-mark]');
    const eyebrowNode = panel.querySelector('[data-state-eyebrow]');
    const titleNode = panel.querySelector('[data-state-title]');
    const messageNode = panel.querySelector('[data-state-message]');
    const detailsNode = panel.querySelector('[data-state-details]');

    if (markNode) markNode.textContent = mark;
    if (eyebrowNode) eyebrowNode.textContent = eyebrow;
    if (titleNode) titleNode.textContent = title;
    if (messageNode) messageNode.textContent = message;

    if (detailsNode) {
      detailsNode.innerHTML = '';
      details.forEach((detail) => {
        const item = document.createElement('li');
        item.textContent = detail;
        detailsNode.append(item);
      });
    }

    configureActions({ primary, secondary });
  };

  const clearStateClasses = () => {
    workspace.classList.remove('is-s6-terminal');
    workspace.dataset.paymentState = 'waiting_payment';
    if (statusCard) delete statusCard.dataset.paymentState;
  };

  const resetToWaiting = (message) => {
    clearStateClasses();
    if (statePanel) statePanel.hidden = true;
    setPanelVisibility({ invoice: true, transfer: true, verification: true, tools: true });
    setStatus({
      state: 'waiting_payment',
      title: 'Waiting for payment',
      message,
      badge: 'Order on hold'
    });
    setSummary({
      title: 'Payment pending',
      message: 'The order is reserved. Fulfilment begins only after server-confirmed payment.',
      fact: 'Waiting for payment'
    });
  };

  const applyVerificationFailure = () => {
    const reason = FAILURE_REASONS[requestedReason] || FAILURE_REASONS.receiver_mismatch;
    workspace.dataset.paymentState = 'verification_failed';
    setPanelVisibility({ invoice: true, transfer: true, verification: true, tools: true });
    setStatus({
      state: 'verification_failed',
      title: 'Verification failed',
      message: reason.message,
      badge: 'Order on hold'
    });
    setSummary({
      title: 'Verification failed',
      message: 'The submitted transaction did not satisfy this invoice. The order remains unpaid and on hold.',
      fact: 'New hash required'
    });
    renderStatePanel({
      tone: 'error',
      mark: '!',
      eyebrow: 'Transaction not accepted',
      title: reason.title,
      message: reason.message,
      details: reason.details,
      primary: { label: 'Try another transaction hash →', action: 'retry_hash' },
      secondary: null
    });
  };

  const applyTemporaryError = () => {
    workspace.dataset.paymentState = 'temporary_error';
    setPanelVisibility({ invoice: true, transfer: true, verification: true, tools: true });
    setStatus({
      state: 'temporary_error',
      title: 'Verification temporarily unavailable',
      message: 'We could not verify this transaction right now. Your payment has not been rejected.',
      badge: 'Retry available'
    });
    setSummary({
      title: 'Verification pending',
      message: 'The verification service is temporarily unavailable. The order remains on hold.',
      fact: 'Retry verification'
    });
    renderStatePanel({
      tone: 'retry',
      mark: '…',
      eyebrow: 'Temporary verification issue',
      title: 'Your payment has not been rejected',
      message: 'The blockchain service or same-order write lock was temporarily unavailable. Retry the verification without creating another order or invoice.',
      details: [
        'The existing invoice remains active.',
        'Do not send another payment solely because of this message.',
        'No automatic background monitoring is running.'
      ],
      primary: { label: 'Try verification again →', action: 'retry_verification' },
      secondary: null
    });
  };

  const applyManualReview = () => {
    workspace.dataset.paymentState = 'manual_review';
    setPanelVisibility({ invoice: true, transfer: false, verification: false, tools: true });
    setStatus({
      state: 'manual_review',
      title: 'Payment under review',
      message: 'The payment needs a manual review before the order can move forward.',
      badge: 'Manual review'
    });
    setSummary({
      title: 'Manual review',
      message: 'The payment has not been confirmed or rejected. Do not send another transfer.',
      fact: 'Review in progress'
    });
    renderStatePanel({
      tone: 'review',
      mark: 'i',
      eyebrow: 'Manual payment review',
      title: 'Do not send another payment',
      message: 'A payment or order-state inconsistency requires administrator review. The customer-safe workspace does not expose the internal diagnostic.',
      details: [
        'Keep the payment recovery link for this order.',
        'Use Refresh status only when you return to this page.',
        'The server remains the only authority that can confirm payment.'
      ],
      primary: null,
      secondary: null
    });
  };

  const applyCancelled = () => {
    workspace.dataset.paymentState = 'cancelled';
    workspace.classList.add('is-s6-terminal');
    setPanelVisibility({ invoice: false, transfer: false, verification: false, tools: false });
    setStatus({
      state: 'cancelled',
      title: 'Order cancelled',
      message: 'This order can no longer accept a Crypto payment.',
      badge: 'Payment unavailable'
    });
    setSummary({
      title: 'Order cancelled',
      message: 'No payment action is available for this order.',
      fact: 'Cancelled'
    });
    renderStatePanel({
      tone: 'terminal',
      mark: '×',
      eyebrow: 'Payment unavailable',
      title: 'This order can no longer accept payment',
      message: 'A cancelled order receives no payment operation in the live Workspace. Do not transfer funds to any previously copied address.',
      details: [
        'No amount, address or transaction-hash action remains available.',
        'The live server would refuse a Workspace Token for this order.',
        'Contact support only if you believe the cancellation is incorrect.'
      ],
      primary: { label: 'Contact support →', action: 'contact_support' },
      secondary: { label: 'Return to the shop', href: 'spatial-flow-shop-v1.html' }
    });
  };

  const applyPaidConfirmed = () => {
    workspace.dataset.paymentState = 'paid_confirmed';
    workspace.classList.add('is-s6-terminal');
    setPanelVisibility({ invoice: false, transfer: false, verification: false, tools: false });
    setStatus({
      state: 'paid_confirmed',
      title: 'Payment confirmed',
      message: 'The server confirmed the transaction and completed the WooCommerce payment lifecycle.',
      badge: 'Server confirmed'
    });
    setSummary({
      title: 'Payment confirmed',
      message: 'The live server now redirects to the canonical WooCommerce Order Received result.',
      fact: 'Paid confirmed'
    });
    renderStatePanel({
      tone: 'success',
      mark: '✓',
      eyebrow: 'Server-confirmed payment',
      title: 'Your payment is confirmed',
      message: 'This is the S6 transition boundary only. The live Workspace redirects to the canonical WooCommerce Step 04 result after payment_complete().',
      details: [
        'The browser cannot create this state.',
        'No payment or transaction action remains available.',
        'The Step 04 result page will be reviewed separately in S7.'
      ],
      primary: null,
      secondary: null
    });
  };

  const applyRecovered = () => {
    workspace.dataset.paymentState = 'recovered';
    setPanelVisibility({ invoice: true, transfer: true, verification: true, tools: true });
    setStatus({
      state: 'recovered',
      title: 'Payment workspace restored',
      message: 'The same unpaid order and active invoice were restored through the WooCommerce order-pay recovery route.',
      badge: 'Invoice restored'
    });
    setSummary({
      title: 'Payment pending',
      message: 'The original order and invoice are active. No duplicate order or replacement invoice was created.',
      fact: 'Recovered invoice'
    });
    renderStatePanel({
      tone: 'recovered',
      mark: '↺',
      eyebrow: 'Unfinished payment recovered',
      title: 'Your existing invoice has been restored',
      message: 'The live recovery URL reopens the same WooCommerce order-pay Workspace and restores the same active invoice.',
      details: [
        'The order number and Invoice ID remain unchanged.',
        'Previously copied payment details must be checked against the restored invoice.',
        'Payment verification still requires the TRON transaction hash.'
      ],
      primary: { label: 'Continue with this invoice →', action: 'dismiss_recovery' },
      secondary: null
    });
  };

  const applyRequestedState = () => {
    if (workspace.dataset.invoiceBootstrapState !== 'ready' || !readyContent || readyContent.hidden) return;

    clearStateClasses();

    if (requestedState === 'verification_failed') applyVerificationFailure();
    if (requestedState === 'temporary_error') applyTemporaryError();
    if (requestedState === 'manual_review') applyManualReview();
    if (requestedState === 'cancelled') applyCancelled();
    if (requestedState === 'paid_confirmed') applyPaidConfirmed();
    if (requestedState === 'recovered') applyRecovered();
  };

  const observer = new MutationObserver(applyRequestedState);
  observer.observe(workspace, {
    attributes: true,
    attributeFilter: ['data-invoice-bootstrap-state']
  });

  applyRequestedState();

  window.addEventListener('pagehide', () => {
    observer.disconnect();
    window.clearTimeout(noticeTimer);
  });
})();
