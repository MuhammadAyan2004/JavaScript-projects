const quotes = document.getElementById("quotes");
const authors = document.getElementById("author");
const newBtn = document.getElementById("new");
const tweet = document.getElementById("tweet");
const menu = document.getElementById("menu");
const list = document.getElementById("list");
let selectedCategory = '';
function menuItem(){
    list.style.display="block"; 
}
function listItem(e){
    selectedCategory = e.target.textContent;
    menu.textContent = selectedCategory;
    list.style.display="none";
}
const api_url = `https://api.api-ninjas.com/v1/quotes?category=${selectedCategory}`;
async function getquote() {
    const response = await fetch(api_url,{
        method:'Get',
        headers:{
            'x-api-key':'zIOuSUxHltGN70PDb+CLaA==AUBMndoU4jvA4z0i'
        }
    });
    if(response.ok){
        const data = await response.json();
        console.log(data);
        quotes.innerHTML=data[0].quote;
        authors.innerHTML=data[0].author;
    }else{
        quotes.innerHTML = "No quotes found for this category.";
        authors.innerHTML = "";
    }
}
getquote();
function tweets() {
    window.open("https://twitter.com/intent/tweet?text=" + quotes.innerHTML + " --- by " + authors.innerHTML, "tweet window", "width=600,height=300");
}
tweet.addEventListener("click",tweets);
newBtn.addEventListener("click",getquote);
menu.addEventListener("click",menuItem);
list.addEventListener("click",listItem)