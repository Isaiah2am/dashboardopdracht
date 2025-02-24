const startbutton = document.getElementById("js--start");
const stopbutton = document.getElementById("js--stop");
const resetbutton = document.getElementById("js--reset");
let seconds = 0;
let minutes = 0;
let running = false 

const secondstimer = document.getElementById("js--seconds")
const minutestimer = document.getElementById("js--minutes")

let timer;

startbutton.onclick = function(){
    if(running === true){
        return;
    }
    running = true;
   timer = setInterval(function(){
        seconds = seconds +1
        if(seconds === 60){
            minutes = minutes +1;
            minutestimer.innerText = minutes;
            seconds = 0;
        }
        secondstimer.innerText = seconds
    }, 1000);
}

stopbutton.onclick = function(){
    clearInterval(timer);
    running = false;
}

resetbutton.onclick = function(){
    secondstimer.innerText = seconds
    seconds = 0;
    minutestimer.innerText = minutes;
    minutes = 0;
}

// de slider //

const rangevalue = document.getElementById("js--rangevalue");

const slider = document.getElementById("js--slider")

const body = document.getElementById("js--body")

slider.value = 2;
rangevalue.innerText = slider.value + "x"; 


slider.oninput = function(){
    rangevalue.innerHTML = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}



