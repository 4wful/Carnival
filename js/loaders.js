// loaders.js
export function loadHTML(elementId, filePath) {
    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
}

export function loadTranslations(lang) {
    fetch(`./lang/messages_${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // Traducción de data-i18n (data-i18n)
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (data[key]) {
                    element.innerText = data[key];
                }
            });

            // Traducción de placeholders (placeholder)
            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                if (data[key]) {
                    element.setAttribute('placeholder', data[key]);
                }
            });

            // Traducción de value (value)
            document.querySelectorAll('[data-i18n-value]').forEach(element => {
                const key = element.getAttribute('data-i18n-value');
                if (data[key]) {
                    element.setAttribute('value', data[key]);
                }
            });

            // Traducción de títulos (title)
            document.querySelectorAll('[data-i18n-title]').forEach(element => {
                const key = element.getAttribute('data-i18n-title');
                if (data[key]) {
                    element.setAttribute('title', data[key]);
                }
            });
        })
        .catch(error => console.error('Error al cargar las traducciones:', error));
}
