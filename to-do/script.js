const input = document.getElementById("input");
const btn = document.querySelector("button");
const toDo = document.getElementById("to-do");

let et = null;

function todo () {
    const text = input.value.trim();
    if(input.value === ""){
        alert("please write something");
        return false;
    }else if(btn.innerText==="edit"){
        et.target.previousElementSibling.innerHTML=text;
        btn.innerText = "add";
        input.value="";
    }else{
    const li =document.createElement("li")
    const p =document.createElement("p")
    p.innerHTML=text;
    li.appendChild(p);
    toDo.appendChild(li);
    input.value = "";

    const edit = document.createElement("button");
    edit.innerText = "edit"
    edit.classList.add("edit-btn");
    li.appendChild(edit);

    const del = document.createElement("button");
    del.innerText = "remove"
    del.classList.add("del-btn");
    li.appendChild(del);
 }
}
function updateTodo(e){
    if(e.target.innerText === "remove"){
        toDo.removeChild(e.target.parentElement)
    }else if (e.target.innerText === "edit"){
        input.value = e.target.previousElementSibling.innerHTML
        input.focus();
        btn.innerText = "edit"
        et = e
    }
}

btn.addEventListener("click",todo)
toDo.addEventListener("click",updateTodo)
