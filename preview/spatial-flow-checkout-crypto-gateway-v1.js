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

  const form = document.querySelector('[data-crypto-gateway-form]');
  if (!form) return;

  const notice = document.querySelector('[data-checkout-notice]');
  const orderTotal = document.querySelector('[data-gateway-order-total]');
  let noticeTimer = null;

  const showNotice = (message) => {
    if (!notice) return;

    notice.textContent = message;
    notice.classList.add('is-visible');
    window.clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => {
      notice.classList.remove('is-visible');
    }, 4200);
  };

  const updateOrderTotal = () => {
    if (!orderTotal) return;

    const state = readState();
    const shippingPrice = Number(state.shipping?.price || 0);
    const firstTextNode = [...orderTotal.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);

    if (firstTextNode) {
      firstTextNode.nodeValue = `$${(SUBTOTAL + shippingPrice).toFixed(2)}`;
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const current = readState();
    writeState({
      ...current,
      paymentMethod: 'cryptocurrency',
      cryptoGatewayHandoff: {
        assetCode: 'USDT',
        networkCode: 'TRON',
        networkLabel: 'TRON / TRC20',
        environmentOwner: 'administrator',
        customerSelectable: false,
        transactionHashRequired: true,
        prototypeOnly: true
      }
    });

    showNotice('S4B handoff reached. No WooCommerce order or Crypto invoice was created, and S5 Invoice / Waiting has not started.');
  });

  updateOrderTotal();
})();
