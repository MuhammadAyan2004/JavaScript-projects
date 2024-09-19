const input = document.getElementById("input");
const btn = document.getElementById("search");
const paraDiv = document.querySelector(".para");

async function dicApp (){
    const words = input.value;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`;
    paraDiv.innerHTML = '';
    try{
        const response = await fetch(apiUrl)
        if(!response.ok){
            throw new Error("word not found")
        }
        const data = await response.json()
        console.log(data);
        const wordData= data[0];
        const wordName = wordData.word;
        const wordDef = wordData.meanings[0].definitions[0].definition;
        const wordSpeach = wordData.meanings[0].partOfSpeech;
        const wordSync = wordData.meanings[0]?.synonyms ||'N/A';
        const voice = wordData.phonetics[0]?.audio|| null;

        paraDiv.innerHTML=`<h2>word: ${wordName} </h2>
        <p><strong>Defination: </strong>${wordDef}
        <br><strong>Part of Speach: </strong>${wordSpeach}
        <br><strong>synonyms:</strong> ${wordSync}`;

        if(voice){
            paraDiv.innerHTML += `
            <p><strong>Pronunciation:</strong></p>
            <audio controls>
            <source src="${voice}" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>`;
            paraDiv.style.display = "block"
        }else {
            paraDiv.innerHTML += `<p>No pronunciation available.</p>`;
        }
        
    }
    catch (error) {
    paraDiv.innerHTML = `<p>${error.message}</p>`;
}
}
btn.addEventListener("click",dicApp);