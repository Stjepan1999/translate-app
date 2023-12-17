import translateText from "./apiCall";


function createEventListeners() {
    const translateButton = document.querySelector('.translate-button');
    translateButton.addEventListener('click', translateText);

    const copySourceButton = document.getElementById('copy-source-text');
    copySourceButton.addEventListener('click', copySourceText);

    const copyTranslationButton = document.getElementById('copy-translation');
    copyTranslationButton.addEventListener('click', copyTranslation);

    const speakSourceTextButton = document.getElementById('speak-source-text');
    speakSourceTextButton.addEventListener('click', speakSourceText);

    const speakTranslationButton = document.getElementById('speak-translation');
    speakTranslationButton.addEventListener('click', speakTranslation)
}


function showTranslation(translatedText) {
    const textarea = document.getElementById('translation-area');
    textarea.textContent = translatedText
}

function copySourceText() {
    const copyTextarea = document.getElementById('text-to-translate');
    copyTextarea.select();

    document.execCommand('copy');
}

function copyTranslation() {
    const copyTextarea = document.getElementById('translation-area');
    copyTextarea.select();

    document.execCommand('copy');
}

function speakSourceText() {
    const textToSpeak = document.getElementById('text-to-translate').value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);
}

function speakTranslation() {
    const textToSpeak = document.getElementById('translation-area').value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);
}

export { createEventListeners, showTranslation }