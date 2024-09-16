let btn = document.querySelector("button");
let qrImg = document.getElementById("qrImg");
let imgBox = document.getElementById("imgBox");
let input = document.getElementById("input");

function codeGenerator (){
    if(input.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgBox.classList.add("show-img");
    }else{
        input.classList.add("error")
        setTimeout(()=>{
            input.classList.remove("error")
        },1000)
    }

}


btn.addEventListener("click",codeGenerator)