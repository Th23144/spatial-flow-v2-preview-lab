(() => {
  'use strict';

  const STORAGE_KEY = 'spatialFlowCheckoutPrototype';

  const ASSETS = {
    usdt: {
      id: 'usdt',
      symbol: 'USDT',
      name: 'Tether',
      networks: [
        { id: 'tron', label: 'TRON', detail: 'Static network example only' },
        { id: 'ethereum', label: 'Ethereum', detail: 'Static network example only' }
      ]
    },
    usdc: {
      id: 'usdc',
      symbol: 'USDC',
      name: 'USD Coin',
      networks: [
        { id: 'ethereum', label: 'Ethereum', detail: 'Static network example only' },
        { id: 'solana', label: 'Solana', detail: 'Static network example only' }
      ]
    },
    btc: {
      id: 'btc',
      symbol: 'BTC',
      name: 'Bitcoin',
      networks: [
        { id: 'bitcoin', label: 'Bitcoin', detail: 'Static network example only' }
      ]
    }
  };

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
    const next = { ...readState(), ...partial };
    writeState(next);
    return next;
  };

  const form = document.querySelector('[data-crypto-form]');
  if (!form) return;

  const assetButtons = [...document.querySelectorAll('[data-crypto-asset]')];
  const searchInput = document.querySelector('[data-crypto-search]');
  const networkEmpty = document.querySelector('[data-network-empty]');
  const networkGrid = document.querySelector('[data-network-grid]');
  const selectedAssetOutput = document.querySelector('[data-selected-asset]');
  const selectedNetworkOutput = document.querySelector('[data-selected-network]');
  const submitButton = form.querySelector('[data-crypto-submit]');
  const notice = document.querySelector('[data-checkout-notice]');
  let noticeTimer = null;

  const showNotice = (message) => {
    if (!notice) return;
    notice.textContent = message;
    notice.classList.add('is-visible');
    window.clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => notice.classList.remove('is-visible'), 4200);
  };

  const storedDraft = readState().cryptoDraft || {};
  let selectedAssetId = ASSETS[storedDraft.assetId] ? storedDraft.assetId : null;
  let selectedNetworkId = null;

  if (selectedAssetId) {
    const networkIds = ASSETS[selectedAssetId].networks.map((network) => network.id);
    selectedNetworkId = networkIds.includes(storedDraft.networkId) ? storedDraft.networkId : null;
  }

  const persistDraft = () => {
    const asset = selectedAssetId ? ASSETS[selectedAssetId] : null;
    const network = asset?.networks.find((item) => item.id === selectedNetworkId) || null;

    mergeState({
      cryptoDraft: {
        assetId: asset?.id || null,
        assetSymbol: asset?.symbol || null,
        assetName: asset?.name || null,
        networkId: network?.id || null,
        networkLabel: network?.label || null,
        prototypeOnly: true
      }
    });
  };

  const updateSummary = () => {
    const asset = selectedAssetId ? ASSETS[selectedAssetId] : null;
    const network = asset?.networks.find((item) => item.id === selectedNetworkId) || null;

    if (selectedAssetOutput) {
      selectedAssetOutput.textContent = asset ? `${asset.symbol} · ${asset.name}` : 'Not selected';
    }

    if (selectedNetworkOutput) {
      selectedNetworkOutput.textContent = network ? network.label : 'Not selected';
    }

    if (submitButton) {
      submitButton.disabled = !(asset && network);
      submitButton.setAttribute('aria-disabled', String(submitButton.disabled));
    }
  };

  const renderAssets = () => {
    assetButtons.forEach((button) => {
      const isSelected = button.dataset.cryptoAsset === selectedAssetId;
      button.classList.toggle('is-selected', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });
  };

  const renderNetworks = () => {
    if (!networkGrid || !networkEmpty) return;

    networkGrid.replaceChildren();

    if (!selectedAssetId) {
      networkEmpty.hidden = false;
      networkGrid.hidden = true;
      networkGrid.setAttribute('aria-disabled', 'true');
      updateSummary();
      return;
    }

    const asset = ASSETS[selectedAssetId];
    networkEmpty.hidden = true;
    networkGrid.hidden = false;
    networkGrid.setAttribute('aria-disabled', 'false');

    asset.networks.forEach((network) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'crypto-choice';
      button.dataset.cryptoNetwork = network.id;
      button.setAttribute('aria-pressed', String(network.id === selectedNetworkId));
      button.innerHTML = `
        <span class="crypto-choice__mark" aria-hidden="true">${network.label.slice(0, 1)}</span>
        <span class="crypto-choice__copy">
          <strong>${network.label}</strong>
          <span>${network.detail}</span>
        </span>
        <span class="crypto-choice__badge">Not confirmed by gateway</span>
      `;

      if (network.id === selectedNetworkId) {
        button.classList.add('is-selected');
      }

      button.addEventListener('click', () => {
        selectedNetworkId = network.id;
        persistDraft();
        renderNetworks();
        updateSummary();
      });

      networkGrid.append(button);
    });

    updateSummary();
  };

  assetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nextAssetId = button.dataset.cryptoAsset;
      if (!ASSETS[nextAssetId]) return;

      if (selectedAssetId !== nextAssetId) {
        selectedNetworkId = null;
      }

      selectedAssetId = nextAssetId;
      persistDraft();
      renderAssets();
      renderNetworks();
      updateSummary();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();

      assetButtons.forEach((button) => {
        const asset = ASSETS[button.dataset.cryptoAsset];
        const haystack = `${asset.symbol} ${asset.name}`.toLowerCase();
        button.hidden = Boolean(query && !haystack.includes(query));
      });
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const asset = selectedAssetId ? ASSETS[selectedAssetId] : null;
    const network = asset?.networks.find((item) => item.id === selectedNetworkId) || null;

    if (!asset || !network) {
      showNotice('Choose both a digital asset and a network before continuing.');
      return;
    }

    mergeState({
      paymentMethod: 'cryptocurrency',
      cryptoSelection: {
        assetId: asset.id,
        assetSymbol: asset.symbol,
        assetName: asset.name,
        networkId: network.id,
        networkLabel: network.label,
        prototypeOnly: true
      }
    });

    showNotice('Static S4A handoff reached. No quote, wallet address, WooCommerce order or Crypto invoice was created.');
  });

  renderAssets();
  renderNetworks();
  updateSummary();
})();
