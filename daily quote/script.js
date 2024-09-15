const quotes = document.getElementById("quotes");
const authors = document.getElementById("author");
const newBtn = document.getElementById("new");
const tweet = document.getElementById("tweet");
const api_url = "https://api.api-ninjas.com/v1/quotes?";

async function getquote() {
    const response = await fetch(api_url,{
        method:'Get',
        headers:{
            'x-api-key':'zIOuSUxHltGN70PDb+CLaA==AUBMndoU4jvA4z0i'
        }
    });
    var data = await response.json();
    console.log(data);
    quotes.innerHTML=data[0].quote;
    authors.innerHTML=data[0].author;

}
getquote();

function tweets(){
    window.open("https://twitter.com/intent/tweet?text=" + quotes.innerHTML + "--- by"+ authors.innerHTML+"tweet window","width=600,height=300")
}
tweet.addEventListener("click",tweets)
newBtn.addEventListener("click",getquote)