let close = document.getElementById("close");
const password = document.querySelector(".password");

close.addEventListener("click",()=>{
    if(password.type=="password"){
        password.type = "text";
        close.src = "eye-open.png";
    }else{
        password.type = "password"
        close.src = "eye-close.png";
    }
})