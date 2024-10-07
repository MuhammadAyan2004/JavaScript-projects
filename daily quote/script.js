const quotes = document.getElementById("quotes");
const authors = document.getElementById("author");
const newBtn = document.getElementById("new");
const tweet = document.getElementById("tweet");
const menu = document.getElementById("menu");
const list = document.getElementById("list");
const body = document.querySelector("body");

let selectedCategory = '';
const apiKey = 'zIOuSUxHltGN70PDb+CLaA==AUBMndoU4jvA4z0i';
async function getquote() {  
    const api_url = `https://api.api-ninjas.com/v1/quotes?category=${selectedCategory}`;  
    const response = await fetch(api_url,{
        method: 'Get',
        headers:{'x-api-key': apiKey}
    });
    if(response.ok){
        const data = await response.json();
        quotes.innerHTML = data[0].quote;
        authors.innerHTML = data[0].author;
    }else{
        quotes.innerHTML = "no qoute found in this category";
        authors.innerHTML = "not found";
    }
}
function menuItem(e){
    list.style.display = "block"
}
function listItem(e){
    selectedCategory = e.target.textContent;
    menu.textContent = selectedCategory;
     list.style.display = "none"
}
function hideList(e){
    if(!menu.contains(e.target) && !list.contains(e.target)){
        list.style.display = "none"  
    }
}
function tweets() {
    window.open("https://twitter.com/intent/tweet?text=" + quotes.innerHTML + " --- by " + authors.innerHTML, "tweet window", "width=600,height=300");
}
tweet.addEventListener("click",tweets);
newBtn.addEventListener("click",getquote);
menu.addEventListener("click",menuItem);
list.addEventListener("click",listItem);
body.addEventListener("click",hideList);
