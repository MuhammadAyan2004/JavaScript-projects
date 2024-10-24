let imagezoom = document.getElementById("imageZoom");
const btn = document.querySelector("button");
const btn2 = document.querySelector("#minus");

btn.addEventListener("click", zoom)
btn2.addEventListener("click", zoomOut)

let zoomEnabled = false;

function zoomOut(){
    zoomEnabled = false;
    imagezoom.style.setProperty('--cursor','auto');
    imagezoom.style.setProperty('--opacity','0');
    imagezoom.removeEventListener("mousemove",handleZoomMove)
}

function zoom(){
    zoomEnabled = true;
    imagezoom.style.setProperty('--cursor','zoom-in');
    imagezoom.addEventListener("mousemove",handleZoomMove) 
    imagezoom.addEventListener("mouseout",()=>{
        imagezoom.style.setProperty('--opacity','0');
    })
}
function handleZoomMove(e){
    if(zoomEnabled){
        imagezoom.style.setProperty('--opacity','1');
        let pointer = {
            x: (e.offsetX * 100) / imagezoom.offsetWidth,
            y: (e.offsetY * 100) / imagezoom.offsetHeight
        }
        imagezoom.style.setProperty('--zoom-x',pointer.x + '%');
        imagezoom.style.setProperty('--zoom-y',pointer.y + '%');
    }
}
 