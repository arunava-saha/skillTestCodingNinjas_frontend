// Global variables
const watch = document.querySelector('.watch-container .watch');
const start_btn = document.getElementById('startbtn');
const stop_btn = document.getElementById("stopbtn");
const reset_btn = document.getElementById("resetbtn");

let sec = 0;
let interval = null;

// add event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

// Update interval
function UpdateInterval() {
    sec++;

    // set watch
    let hrs = Math.floor(sec / 3600);
    let mins = Math.floor((sec - (hrs * 3600)) / 60);
    let secs = sec % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    watch.innerText = `${hrs}:${mins}:${secs}`;
    // console.log(watch.innerText);
}
// UpdateInterval();

function start() {
    if (interval) return;

    interval = setInterval(UpdateInterval, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    sec = 0;
    watch.innerText = '00:00:00';
}