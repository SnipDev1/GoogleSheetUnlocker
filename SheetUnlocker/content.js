(function() {
  function enableCopy() {
    const noSelectElements = document.querySelectorAll('.docsshared-no-select, .docsshared-disable-image-copy');
    noSelectElements.forEach(el => {
      el.classList.remove('docsshared-no-select', 'docsshared-disable-image-copy');
    });
    
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        -webkit-user-select: text !important;
        user-select: text !important;
      }
      img {
        -webkit-user-drag: auto !important;
        pointer-events: auto !important;
      }
    `;
    document.head.appendChild(style);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enableCopy);
  } else {
    enableCopy();
  }

  const observer = new MutationObserver((mutations) => {
    if (document.querySelector('.docsshared-no-select, .docsshared-disable-image-copy')) {
      enableCopy();
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
})();