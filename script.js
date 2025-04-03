const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");

const displaytime = document.querySelector(".displaytime");

let milisec = 0;
let sec = 0;
let min = 0;

let timer = null;

startbtn.addEventListener("click", function () {
  // console.log('hey');

  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(starttimer, 10);
});

stopbtn.addEventListener("click", function () {
  clearInterval(timer);
});

resetbtn.addEventListener("click", function () {
  clearInterval(timer);
  milisec = 0; 
  sec = 0;    
  min = 0;  
  displaytime.innerHTML = `00 : 00 : 00`;
});


function starttimer() {
  milisec++;
  if (milisec == 100) {
    milisec = 0;
    sec++;

    if (sec == 60) {
      sec = 0;
      min++;
    }
  }

  let milistring = milisec < 10 ? `0${milisec}` : milisec;
  let secondstring = sec < 10 ? `0${sec}` : sec;
  let mintring = min < 10 ? `0${min}` : min;

  displaytime.innerHTML = `${mintring} : ${secondstring} : ${milistring}`;
}
