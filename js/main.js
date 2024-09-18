// main.js
import { getLanguageFromUrl, updateLinksWithLang } from './helpers.js';
import { loadHTML, loadTranslations } from './loaders.js';

document.addEventListener('DOMContentLoaded', () => {
    const lang = getLanguageFromUrl();

    // Cargar el header y el footer primero
    Promise.all([
        loadHTML('header', './header.html'),
        loadHTML('footer', './footer.html')
    ]).then(() => {
        // Actualizar los enlaces dentro del header y footer con el idioma seleccionado
        updateLinksWithLang(lang);

        // Aplicar las traducciones después de cargar el header y footer  
        loadTranslations(lang);
    }).catch(error => {
        console.error('Error durante la carga del header/footer:', error);
    });
});
