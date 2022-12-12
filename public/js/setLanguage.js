if (location.pathname.includes('/en')) {
    let pathname = location.pathname.split('/en')[1];

    if (pathname !== '') {
        if(location.pathname.includes('hour')) {
            const newPath = pathname.replace('hour', 'uur');
            languageSelector.setAttribute(
                'href', 
                newPath.includes('uurs') ? newPath.replace('uurs', 'uur') : newPath
            );
        }
    } else {
        languageSelector.setAttribute('href', '/');
    }
} else {
    if (location.pathname !== '/') {
        if(location.pathname.includes('uur')) {
            const newPath = location.pathname.replace('uur', 'hours');
            languageSelector.setAttribute(
                'href', 
                `/en${newPath.includes('1-hours') ? newPath.replace('hours', 'hour') : newPath}`
            );
        }
    } else {
        languageSelector.setAttribute('href', '/en');

    }
}