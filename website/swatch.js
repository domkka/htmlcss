const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervallId;
let hrs = 0;
let mins = 0;
let secs = 0;
let mils = 0;

startBtn.addEventListener("click", () => {
    if (paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervallId = setInterval(updateTime, 50);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervallId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervallId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    mils = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    mils = Math.floor(elapsedTime % 1000);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    mils = pad(mils);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${mils}`;


    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}