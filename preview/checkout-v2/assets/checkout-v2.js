(() => {
  'use strict';

  const notice = document.querySelector('[data-sf-notice]');
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

  document.addEventListener('click', (event) => {
    const disabledRoute = event.target.closest('[data-sf-coming-soon]');
    if (!disabledRoute) return;

    event.preventDefault();

    const phase = disabledRoute.getAttribute('data-sf-coming-soon') || 'a later phase';
    showNotice(
      `This state is intentionally not linked yet. It will be added in ${phase}, so the reference system never contains a broken route.`
    );
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !notice) return;
    notice.classList.remove('is-visible');
  });
})();
