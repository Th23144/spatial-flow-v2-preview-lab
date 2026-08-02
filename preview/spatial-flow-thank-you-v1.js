(() => {
  'use strict';

  const body = document.body;
  if (!body.classList.contains('checkout-step-result')) return;

  const query = new URLSearchParams(window.location.search);
  const requested = query.get('prototype_result');
  const state = requested === 'pending' ? 'pending' : 'confirmed';

  const states = {
    confirmed: {
      documentTitle: 'Order Confirmed — Spatial Flow',
      kicker: 'Server-confirmed result · Step 04 of 04',
      title: 'Order <em>confirmed</em>.',
      lede: 'Payment has been confirmed by the server. Your WooCommerce order is now ready for fulfilment.',
      authority: 'This static reference represents the result only after the server has completed the payment lifecycle. The browser does not decide that an order is paid.',
      statusEyebrow: 'Payment result',
      statusTitle: 'Payment received',
      statusMessage: 'The transaction was confirmed and WooCommerce completed the payment lifecycle for this order.',
      statusBadge: 'Server confirmed',
      statusMark: '✓',
      overviewPayment: 'Confirmed',
      paymentStatus: 'Confirmed',
      transaction: '8f27…c4a1',
      transactionNote: 'Customer-safe abbreviated static reference',
      summaryTitle: 'Order confirmed',
      summaryMessage: 'Payment is confirmed. Fulfilment may now begin according to the WooCommerce order state.',
      summaryStatus: 'Paid',
      summaryNote: 'A confirmation email and later tracking updates are sent by the real WooCommerce mail system.',
      primaryLabel: 'Continue browsing →',
      primaryHref: 'spatial-flow-shop-v1.html',
      secondaryLabel: 'Track order',
      secondaryHref: 'spatial-flow-track-order-v1.html',
      timeline: [
        {
          step: '01 · Confirmed',
          title: 'Payment is <em>verified</em>.',
          copy: 'The live server has confirmed payment and WooCommerce owns the resulting order status.'
        },
        {
          step: '02 · Prepare',
          title: 'The order enters the <em>studio</em>.',
          copy: 'Fulfilment begins only after the confirmed WooCommerce state permits preparation.'
        },
        {
          step: '03 · Dispatch',
          title: 'Tracking arrives by <em>email</em>.',
          copy: 'The real store sends the official shipment update after the parcel is dispatched.'
        }
      ],
      progressPayment: 'Payment ✓',
      progressResult: 'Confirmed',
      prototype: 'Static S7 confirmed-result reference only · no order, email, stock or payment state was changed by this page.'
    },
    pending: {
      documentTitle: 'Order Received · Payment Pending — Spatial Flow',
      kicker: 'Order received · Step 04 result',
      title: 'Payment <em>pending</em>.',
      lede: 'Your order has been received, but payment has not yet been confirmed. Fulfilment has not started.',
      authority: 'This result must come from WooCommerce or the approved payment integration. Returning to this page or changing the URL cannot mark the order paid.',
      statusEyebrow: 'Payment result',
      statusTitle: 'Order on hold',
      statusMessage: 'The order exists, but the server has not confirmed payment. Do not treat this page as a receipt for a completed payment.',
      statusBadge: 'Payment pending',
      statusMark: '…',
      overviewPayment: 'Pending',
      paymentStatus: 'On hold',
      transaction: 'Not confirmed',
      transactionNote: 'No confirmed transaction reference is available',
      summaryTitle: 'Payment pending',
      summaryMessage: 'The order is received but remains unpaid or unconfirmed. Fulfilment has not started.',
      summaryStatus: 'On hold',
      summaryNote: 'Use the original WooCommerce recovery route or contact support. Do not create another order unless instructed.',
      primaryLabel: 'Return to payment workspace →',
      primaryHref: 'spatial-flow-checkout-crypto-invoice-v1.html?prototype_payment=recovered',
      secondaryLabel: 'Contact support',
      secondaryHref: 'spatial-flow-contact-v1.html',
      timeline: [
        {
          step: '01 · Received',
          title: 'The order <em>exists</em>.',
          copy: 'WooCommerce has created the order and keeps the unresolved payment state authoritative.'
        },
        {
          step: '02 · Pending',
          title: 'Payment awaits <em>confirmation</em>.',
          copy: 'No preparation begins until the payment integration or an authorised administrator confirms the result.'
        },
        {
          step: '03 · Next',
          title: 'Resume the same <em>order</em>.',
          copy: 'Use the existing order-pay recovery path rather than creating a duplicate order or replacement invoice.'
        }
      ],
      progressPayment: 'Payment pending',
      progressResult: 'Result',
      prototype: 'Static S7 pending-result reference only · query parameters are review controls and cannot change a WooCommerce order.'
    }
  };

  const current = states[state];
  body.dataset.resultState = state;
  document.title = current.documentTitle;

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };

  const setHTML = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.innerHTML = value;
  };

  setText('[data-result-kicker]', current.kicker);
  setHTML('[data-result-title]', current.title);
  setText('[data-result-lede]', current.lede);
  setText('[data-result-authority]', current.authority);
  setText('[data-result-status-eyebrow]', current.statusEyebrow);
  setText('[data-result-status-title]', current.statusTitle);
  setText('[data-result-status-message]', current.statusMessage);
  setText('[data-result-status-badge]', current.statusBadge);
  setText('[data-result-status-mark]', current.statusMark);
  setText('[data-result-overview-payment]', current.overviewPayment);
  setText('[data-result-payment-status]', current.paymentStatus);
  setText('[data-result-transaction]', current.transaction);
  setText('[data-result-transaction-note]', current.transactionNote);
  setText('[data-result-summary-title]', current.summaryTitle);
  setText('[data-result-summary-message]', current.summaryMessage);
  setText('[data-result-summary-status]', current.summaryStatus);
  setText('[data-result-summary-note]', current.summaryNote);
  setText('[data-result-prototype]', current.prototype);
  setText('[data-result-progress-payment]', current.progressPayment);
  setText('[data-result-progress-result]', current.progressResult);

  const primary = document.querySelector('[data-result-primary]');
  if (primary) {
    primary.textContent = current.primaryLabel;
    primary.href = current.primaryHref;
  }

  const secondary = document.querySelector('[data-result-secondary]');
  if (secondary) {
    secondary.textContent = current.secondaryLabel;
    secondary.href = current.secondaryHref;
  }

  document.querySelectorAll('[data-result-timeline]').forEach((card, index) => {
    const item = current.timeline[index];
    if (!item) return;

    const step = card.querySelector('[data-result-timeline-step]');
    const title = card.querySelector('[data-result-timeline-title]');
    const copy = card.querySelector('[data-result-timeline-copy]');

    if (step) step.textContent = item.step;
    if (title) title.innerHTML = item.title;
    if (copy) copy.textContent = item.copy;
  });

  const paymentStep = document.querySelector('[data-result-payment-step]');
  if (paymentStep) {
    paymentStep.classList.toggle('is-complete', state === 'confirmed');
    paymentStep.classList.toggle('is-active', state === 'pending');
  }
})();
