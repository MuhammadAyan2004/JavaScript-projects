let [second , minute , hour ] = [0,0,0];
let display = document.getElementById("displayTime");
let start = document.getElementById("start");
let pause = document.getElementById("stop");
let reset = document.getElementById("reset");


let timer = null ;

function stopWatch (){
    second++;
    if(second == 60){
        second = 0;
        minute++;
        if(minute == 60){
            minute = 0;
            hour++;
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;

    display.innerHTML = h +":"+ m +":"+s;
}

function watchStart (){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}
function pauseWatch(){
    clearInterval(timer);
}
function resetwatch (){
    clearInterval(timer);
    [second , minute , hour ] = [0,0,0]
    display.innerHTML = "00:00:00"
}

start.addEventListener("click",watchStart);
pause.addEventListener("click",pauseWatch);
reset.addEventListener("click",resetwatch);