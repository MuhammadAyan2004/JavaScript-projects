let scrollContainer = document.querySelector(".container");
let nextbtn = document.getElementById("nextbtn");
let backbtn = document.getElementById("backbtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    
    scrollContainer.style.scrollBehavior = "auto";
})

nextbtn.addEventListener("click",()=>{
    
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})

backbtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})