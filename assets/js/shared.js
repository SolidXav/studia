/* shared.js — theme & nav */
(function () {
  function applyTheme(light) {
    document.documentElement.setAttribute('data-theme', light ? 'light' : '');
    localStorage.setItem('sh-theme', light ? 'light' : 'dark');
    const btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = light ? '☀' : '◐';
  }
  const saved = localStorage.getItem('sh-theme');
  applyTheme(saved === 'light');

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('themeBtn');
    if (btn) btn.addEventListener('click', () =>
      applyTheme(document.documentElement.getAttribute('data-theme') !== 'light'));

    const ham = document.getElementById('hamBtn');
    const links = document.getElementById('navLinks');
    if (ham && links) {
      ham.addEventListener('click', () => links.classList.toggle('open'));
      document.addEventListener('click', e => {
        if (!links.contains(e.target) && e.target !== ham) links.classList.remove('open');
      });
    }

    // Active link
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(a => {
      const href = new URL(a.href, location.href).pathname;
      if (path === href || (href.includes('index') && path.endsWith(href.split('/').slice(0,-1).join('/') + '/')))
        a.classList.add('active');
    });
  });
})();
