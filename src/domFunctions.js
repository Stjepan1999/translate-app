import translateText from "./apiCall";


function createEventListeners() {
    const translateButton = document.querySelector('.translate-button');
    translateButton.addEventListener('click', translateText)
}


function showTranslation(translatedText) {
    const textarea = document.getElementById('translation-area');
    textarea.textContent = translatedText
}

export { createEventListeners, showTranslation }