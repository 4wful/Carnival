// helpers.js

// Obtener el valor de 'lang' desde la URL
export function getLanguageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || 'es';  // Español por defecto si no se especifica
}

// Actualizar los enlaces con el parámetro del idioma seleccionado
export function updateLinksWithLang(lang) {
    document.querySelectorAll('a[href]').forEach(link => {
        const url = new URL(link.href);
        url.searchParams.set('lang', lang);
        link.href = url.toString();
    });
}
