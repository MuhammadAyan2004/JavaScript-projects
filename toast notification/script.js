let toastBox = document.getElementById("toastBox");
const buttons = document.querySelectorAll(".btn");

function showToast(e){
    let toast= document.createElement("div")
    toast.classList.add("toast");

    const msg = e.target.getAttribute("data-message");
    
    const toastType = e.target.classList[1];
    toast.classList.add(toastType);

    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(()=>{
        toast.remove("toast");
    },5000);


}
buttons.forEach(button=>{
    button.addEventListener("click",showToast);
})

