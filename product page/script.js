let golas = [document.getElementById("gola1"),document.getElementById("gola2"),document.getElementById("gola3")]
let img =document.getElementById("img");
let images = ["image1.png","image2.png","image3.png"];

golas.forEach((gola , index)=>{
    gola.addEventListener("click",()=>{
        golas.forEach(g => g.style.backgroundColor = "grey");
        gola.style.backgroundColor = "blue";
        img.src = images[index]
    })
})