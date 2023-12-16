import translateText from "./apiCall";


function createEventListeners() {
    const translateButton = document.querySelector('.translate-button');
    translateButton.addEventListener('click', translateText)
}


export { createEventListeners }