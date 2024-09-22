const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn-2");
const popUp = document.querySelector(".popup");

btn.addEventListener("click",()=>{
    popUp.style.visibility = "visible";
    popUp.style.top = "50%";
    popUp.style.transform = "translate(-50%,-50%) scale(1)";
});
btn2.addEventListener("click",()=>{
    popUp.style.visibility = "hidden";
    popUp.style.top = "0";
    popUp.style.transform = "translate(-50%,-50%) scale(0.1)";
})