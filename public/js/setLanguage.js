if (location.pathname.includes('/en')) {
    let pathname = location.pathname.split('/en')[1];
    if (pathname !== '') {
        languageSelector.setAttribute('href', pathname);
    } else {
        languageSelector.setAttribute('href', '/');
    }
} else {
    if (location.pathname !== '/') {
        languageSelector.setAttribute('href', `/en${location.pathname}`);
    } else {
        languageSelector.setAttribute('href', '/en');

    }
}