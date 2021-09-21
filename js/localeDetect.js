function useVisited() {
  const isVisited = localStorage.getItem('visited');

  if (!isVisited) {
    localStorage.setItem('visited', 'true');
  }

  return isVisited;
}

function getBrowserLocales(options = {}) {
  const defaultOptions = {
    languageCodeOnly: true,
  };

  const opt = {
    ...defaultOptions,
    ...options,
  };

  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages;

  if (!browserLocales) {
    return undefined;
  }

  return new Set(browserLocales.map(locale => {
    const trimmedLocale = locale.trim();

    return opt.languageCodeOnly
      ? trimmedLocale.split(/-|_/)[0]
      : trimmedLocale;
  }));
}

function getCurrentLocale() {
  const pathMatches = window.location.pathname.match(/^\/(\w+)\//);

  if (!pathMatches) {
    return 'en'
  }

  if (pathMatches[1] === 'zh') {
    return 'zh';
  }
}

function redirectToLocale() {
  const isVisited = useVisited();
  if (isVisited) {
    return;
  }

  const currentLocale = getCurrentLocale();
  if (currentLocale === 'zh') {
    return;
  }

  const supportedLocales = getBrowserLocales();

  if (supportedLocales.has('zh')) {
    window.location.replace(new URL('/zh' + window.location.pathname, window.location.href).href);
  }
}

if (typeof Storage !== "undefined") {
  redirectToLocale();
}
