async function translateText() {
    const text = document.getElementById('text-to-translate').value;
    const fromLang = document.getElementById('from-lang').value;
    const toLang = document.getElementById('to-lang').value;
    const url = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${fromLang}|${toLang}`

    try {
        const response = await fetch(url);
        if (!response) {
            console.error('Failed to fetch translation data: ', response.status)
        }
        const translationData = await response.json()
        console.log(translationData)
    } catch (error) {
        console.error('Error fetching translation data: ', error.message)
    }
    
}

export default translateText;