let gola1 =document.getElementById("gola1")
let gola2 =document.getElementById("gola2")
let gola3 =document.getElementById("gola3")
let img =document.getElementById("img")

gola1.addEventListener("click",()=>{
    gola2.style.backgroundColor = "grey";
    gola3.style.backgroundColor = "grey";
    img.src = "image1.png";
})
gola2.addEventListener("click",()=>{
    gola2.style.backgroundColor = "blue";
    gola1.style.backgroundColor = "grey";
    gola3.style.backgroundColor = "grey";
    img.src = "image2.png";
})
gola3.addEventListener("click",()=>{
    gola1.style.backgroundColor = "grey";
    gola2.style.backgroundColor = "grey";
    gola3.style.backgroundColor = "blue";
    img.src = "image3.png";
})