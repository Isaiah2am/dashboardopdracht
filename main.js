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

    var x = document.getElementById("js--start");
  if (x.innerHTML === "Start") {
    x.innerHTML = "Stop";
  } else {
    x.innerHTML = "Start";
  }

    var element = document.getElementById("js--start");
    element.classList.toggle("button--stop");

 
    if(running === true){
        clearInterval(timer);
        running = false;
        return;
    }
    
    if(running === false){
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
        return;
    }
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



// gegevens//



//data ophalen//

const paragraph = document.getElementById("js--text");
const fotoimg = document.getElementById("js--img");

let data = fetch("data.json").then(
    function(binnengekomendata){
        return binnengekomendata.json();
    }).then(
            function(echtedata){
                paragraph.innerHTML = echtedata.text;
                fotoimg.setAttribute("src",echtedata.img);
            });
    



        
        



const text = document.getElementById("js--text")
text.innerText = data.text;


const img = document.getElementById("js--img");
img.setAttribute("src", data.img);

