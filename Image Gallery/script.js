let scrollContainer = document.querySelector(".container");
let nextbtn = document.getElementById("nextbtn");
let backbtn = document.getElementById("backbtn");

scrollContainer.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaX;
    scrollContainer.style.scrollBehavior = "auto";
})

nextbtn.addEventListener("click",()=>{
    
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1000;
})

backbtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1000;
})