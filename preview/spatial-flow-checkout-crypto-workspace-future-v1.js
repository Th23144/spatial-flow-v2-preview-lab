(() => {
  'use strict';

  const STORAGE_KEY = 'spatialFlowCryptoWorkspaceFuturePreview';

  const PAIRS = {
    usdt: {
      symbol: 'USDT',
      name: 'Tether',
      mark: '₮',
      networks: [
        {
          id: 'tron',
          label: 'TRON / TRC20',
          shortLabel: 'TRON',
          current: true,
          amount: '329.00 USDT',
          address: 'T-PROTOTYPE-NOT-A-REAL-ADDRESS',
          verificationLabel: 'TRON transaction hash'
        },
        {
          id: 'ethereum',
          label: 'Ethereum / ERC20',
          shortLabel: 'Ethereum',
          current: false,
          amount: '329.00 USDT',
          address: '0xPROTOTYPE-NOT-A-REAL-ADDRESS',
          verificationLabel: 'Ethereum transaction hash'
        },
        {
          id: 'bnb',
          label: 'BNB Chain / BEP20',
          shortLabel: 'BNB Chain',
          current: false,
          amount: '329.00 USDT',
          address: '0xPROTOTYPE-NOT-A-REAL-ADDRESS',
          verificationLabel: 'BNB Chain transaction hash'
        }
      ]
    },
    usdc: {
      symbol: 'USDC',
      name: 'USD Coin',
      mark: '$',
      networks: [
        {
          id: 'ethereum',
          label: 'Ethereum / ERC20',
          shortLabel: 'Ethereum',
          current: false,
          amount: '329.00 USDC',
          address: '0xPROTOTYPE-NOT-A-REAL-ADDRESS',
          verificationLabel: 'Ethereum transaction hash'
        },
        {
          id: 'solana',
          label: 'Solana',
          shortLabel: 'Solana',
          current: false,
          amount: '329.00 USDC',
          address: 'SOL-PROTOTYPE-NOT-A-REAL-ADDRESS',
          verificationLabel: 'Solana transaction signature'
        }
      ]
    },
    btc: {
      symbol: 'BTC',
      name: 'Bitcoin',
      mark: '₿',
      networks: [
        {
          id: 'bitcoin',
          label: 'Bitcoin',
          shortLabel: 'Bitcoin',
          current: false,
          amount: '0.00480 BTC',
          address: 'bc1-PROTOTYPE-NOT-A-REAL-ADDRESS',
          verificationLabel: 'Bitcoin transaction ID'
        }
      ]
    }
  };

  const root = document.querySelector('[data-future-crypto-workspace]');
  if (!root) return;

  const assetButtons = [...root.querySelectorAll('[data-future-asset]')];
  const searchInput = root.querySelector('[data-future-search]');
  const networkGrid = root.querySelector('[data-future-network-grid]');
  const networkEmpty = root.querySelector('[data-future-network-empty]');
  const continueButton = root.querySelector('[data-future-continue]');
  const selectStage = root.querySelector('[data-future-stage="select"]');
  const preparingStage = root.querySelector('[data-future-stage="preparing"]');
  const invoiceStage = root.querySelector('[data-future-stage="invoice"]');
  const stageItems = [...root.querySelectorAll('[data-future-stage-item]')];
  const notice = document.querySelector('[data-checkout-notice]');
  const verifyForm = root.querySelector('[data-future-verify-form]');
  const verifyInput = root.querySelector('[data-future-verify-input]');
  const verifyError = root.querySelector('[data-future-verify-error]');
  const resetButtons = [...root.querySelectorAll('[data-future-reset]')];
  const copyButtons = [...root.querySelectorAll('[data-future-copy-target]')];
  const refreshButton = root.querySelector('[data-future-refresh]');
  const recoveryButton = root.querySelector('[data-future-recovery]');

  const outputs = {
    selectedAsset: [...root.querySelectorAll('[data-future-selected-asset]')],
    selectedNetwork: [...root.querySelectorAll('[data-future-selected-network]')],
    pairStatus: [...root.querySelectorAll('[data-future-pair-status]')],
    invoiceAsset: [...root.querySelectorAll('[data-future-invoice-asset]')],
    invoiceNetwork: [...root.querySelectorAll('[data-future-invoice-network]')],
    invoiceEnvironment: [...root.querySelectorAll('[data-future-invoice-environment]')],
    invoiceAmount: [...root.querySelectorAll('[data-future-invoice-amount]')],
    invoiceAddress: [...root.querySelectorAll('[data-future-invoice-address]')],
    verificationLabel: [...root.querySelectorAll('[data-future-verification-label]')]
  };

  let noticeTimer = null;
  let selectedAssetId = null;
  let selectedNetworkId = null;

  const showNotice = (message) => {
    if (!notice) return;
    notice.textContent = message;
    notice.classList.add('is-visible');
    window.clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => notice.classList.remove('is-visible'), 4200);
  };

  const readState = () => {
    try {
      return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    } catch (error) {
      return {};
    }
  };

  const writeState = (partial) => {
    const next = { ...readState(), ...partial };
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  };

  const setText = (nodes, value) => {
    nodes.forEach((node) => {
      node.textContent = value;
    });
  };

  const getPair = () => {
    const asset = selectedAssetId ? PAIRS[selectedAssetId] : null;
    const network = asset?.networks.find((item) => item.id === selectedNetworkId) || null;
    return { asset, network };
  };

  const renderStage = (stage) => {
    selectStage.hidden = stage !== 'select';
    preparingStage.classList.toggle('is-visible', stage === 'preparing');
    preparingStage.hidden = stage !== 'preparing';
    invoiceStage.hidden = stage !== 'invoice';

    stageItems.forEach((item) => {
      const itemStage = item.dataset.futureStageItem;
      const order = { select: 1, invoice: 2, verify: 3 };
      const activeStage = stage === 'preparing' ? 'invoice' : stage;
      item.classList.toggle('is-active', itemStage === activeStage);
      item.classList.toggle('is-complete', order[itemStage] < order[activeStage]);
    });
  };

  const renderAssets = () => {
    assetButtons.forEach((button) => {
      const isSelected = button.dataset.futureAsset === selectedAssetId;
      button.classList.toggle('is-selected', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });
  };

  const renderNetworks = () => {
    networkGrid.replaceChildren();

    if (!selectedAssetId) {
      networkEmpty.hidden = false;
      networkGrid.hidden = true;
      return;
    }

    const asset = PAIRS[selectedAssetId];
    networkEmpty.hidden = true;
    networkGrid.hidden = false;

    asset.networks.forEach((network) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'crypto-future-choice';
      button.dataset.futureNetwork = network.id;
      button.setAttribute('aria-pressed', String(network.id === selectedNetworkId));
      button.innerHTML = `
        <span class="crypto-future-choice__mark" aria-hidden="true">${network.shortLabel.slice(0, 1)}</span>
        <span class="crypto-future-choice__copy">
          <strong>${network.label}</strong>
          <span>${network.current ? 'Current plugin route' : 'Future architecture example'}</span>
        </span>
        <span class="crypto-future-choice__badge ${network.current ? 'is-current' : ''}">
          ${network.current ? 'Current supported pair' : 'Not currently enabled'}
        </span>
      `;

      if (network.id === selectedNetworkId) {
        button.classList.add('is-selected');
      }

      button.addEventListener('click', () => {
        selectedNetworkId = network.id;
        writeState({ selectedAssetId, selectedNetworkId });
        renderNetworks();
        renderSummary();
      });

      networkGrid.append(button);
    });
  };

  const renderSummary = () => {
    const { asset, network } = getPair();
    setText(outputs.selectedAsset, asset ? `${asset.symbol} · ${asset.name}` : 'Not selected');
    setText(outputs.selectedNetwork, network ? network.label : 'Not selected');
    setText(
      outputs.pairStatus,
      network ? (network.current ? 'Current supported pair' : 'Future example only') : 'Awaiting selection'
    );

    continueButton.disabled = !(asset && network);
    continueButton.setAttribute('aria-disabled', String(continueButton.disabled));
  };

  const hydrateInvoice = () => {
    const { asset, network } = getPair();
    if (!asset || !network) return;

    setText(outputs.invoiceAsset, asset.symbol);
    setText(outputs.invoiceNetwork, network.label);
    setText(
      outputs.invoiceEnvironment,
      network.current ? 'TRON Mainnet · current architecture' : `${network.shortLabel} · future example`
    );
    setText(outputs.invoiceAmount, network.amount);
    setText(outputs.invoiceAddress, network.address);
    setText(outputs.verificationLabel, network.verificationLabel);

    if (verifyInput) {
      verifyInput.value = '';
      verifyInput.placeholder = `Enter the ${network.verificationLabel}`;
    }
    if (verifyError) verifyError.hidden = true;
  };

  const copyText = async (value) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  };

  assetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const assetId = button.dataset.futureAsset;
      if (!PAIRS[assetId]) return;

      if (assetId !== selectedAssetId) {
        selectedNetworkId = null;
      }
      selectedAssetId = assetId;
      writeState({ selectedAssetId, selectedNetworkId });
      renderAssets();
      renderNetworks();
      renderSummary();
    });
  });

  searchInput?.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    assetButtons.forEach((button) => {
      const asset = PAIRS[button.dataset.futureAsset];
      const haystack = `${asset.symbol} ${asset.name}`.toLowerCase();
      button.hidden = Boolean(query && !haystack.includes(query));
    });
  });

  continueButton?.addEventListener('click', () => {
    const { asset, network } = getPair();
    if (!asset || !network) {
      showNotice('Choose both an asset and one available network before continuing.');
      return;
    }

    hydrateInvoice();
    writeState({ selectedAssetId, selectedNetworkId, stage: 'preparing' });
    renderStage('preparing');

    window.setTimeout(() => {
      writeState({ selectedAssetId, selectedNetworkId, stage: 'invoice' });
      renderStage('invoice');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 850);
  });

  resetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedAssetId = null;
      selectedNetworkId = null;
      window.sessionStorage.removeItem(STORAGE_KEY);
      renderAssets();
      renderNetworks();
      renderSummary();
      renderStage('select');
      showNotice('Future Workspace preview reset to asset selection.');
    });
  });

  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const target = root.querySelector(`[data-future-copy-value="${button.dataset.futureCopyTarget}"]`);
      if (!target) return;
      try {
        await copyText(target.textContent.trim());
        showNotice('Prototype value copied. Do not use it for a real transfer.');
      } catch (error) {
        showNotice('Copy was unavailable in this browser.');
      }
    });
  });

  verifyForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = verifyInput.value.trim();
    const valid = /^[a-fA-F0-9]{64}$/.test(value);

    if (!valid) {
      verifyError.textContent = 'For this interaction preview, enter exactly 64 hexadecimal characters.';
      verifyError.hidden = false;
      return;
    }

    verifyError.hidden = true;
    stageItems.forEach((item) => {
      item.classList.toggle('is-active', item.dataset.futureStageItem === 'verify');
      item.classList.toggle('is-complete', item.dataset.futureStageItem !== 'verify');
    });
    showNotice('Static verification handoff reached. No blockchain request or payment confirmation occurred.');
  });

  refreshButton?.addEventListener('click', () => {
    showNotice('Static preview only. No server status or blockchain data was requested.');
  });

  recoveryButton?.addEventListener('click', async () => {
    try {
      await copyText(window.location.href);
      showNotice('Preview recovery URL copied. A live recovery URL must be generated by WooCommerce.');
    } catch (error) {
      showNotice('Copy was unavailable in this browser.');
    }
  });

  const stored = readState();
  selectedAssetId = PAIRS[stored.selectedAssetId] ? stored.selectedAssetId : null;
  const storedNetworkIds = selectedAssetId
    ? PAIRS[selectedAssetId].networks.map((network) => network.id)
    : [];
  selectedNetworkId = storedNetworkIds.includes(stored.selectedNetworkId)
    ? stored.selectedNetworkId
    : null;

  renderAssets();
  renderNetworks();
  renderSummary();

  if (stored.stage === 'invoice' && selectedAssetId && selectedNetworkId) {
    hydrateInvoice();
    renderStage('invoice');
  } else {
    renderStage('select');
  }
})();
