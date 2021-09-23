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
  const pathMatches = window.location.pathname.match(/^\/((ru)|(zh))\//);

  if (!pathMatches) {
    return 'en'
  }

  return pathMatches[1];
}

function redirectToLocale() {
  const isVisited = useVisited();
  if (isVisited) {
    return;
  }

  const currentLocale = getCurrentLocale();
  if (currentLocale !== 'en') {
    return;
  }

  const supportedLocales = getBrowserLocales();

  if (!supportedLocales) {
    return;
  }

  if (supportedLocales.has('zh')) {
    window.location.replace(new URL('/zh' + window.location.pathname, window.location.href).href);
  }

  if (supportedLocales.has('ru')) {
    window.location.replace(new URL('/ru' + window.location.pathname, window.location.href).href);
  }
}

if (typeof Storage !== "undefined") {
  redirectToLocale();
}
