(()=>{"use strict";document.querySelector(".translate-button").addEventListener("click",(async function(){const t=`https://api.mymemory.translated.net/get?q=${document.getElementById("text-to-translate").value}!&langpair=${document.getElementById("from-lang").value}|${document.getElementById("to-lang").value}`;try{const n=await fetch(t);n||console.error("Failed to fetch translation data: ",n.status);const a=await n.json();e=a.responseData.translatedText,document.getElementById("translation-area").textContent=e}catch(t){console.error("Error fetching translation data: ",t.message)}var e})),document.getElementById("copy-source-text").addEventListener("click",(function(){document.getElementById("text-to-translate").select(),document.execCommand("copy")})),document.getElementById("copy-translation").addEventListener("click",(function(){document.getElementById("translation-area").select(),document.execCommand("copy")}))})();