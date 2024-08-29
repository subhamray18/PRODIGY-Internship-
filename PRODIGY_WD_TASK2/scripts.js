let timer;
let elapsedTime = 0;
let isRunning = false;
let lapCount = 0;

const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const lapButton = document.getElementById('lapButton');
const lapList = document.getElementById('lapList');

function formatTime(ms) {
    const date = new Date(ms);
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0').substring(0, 2);
    return `${minutes}:${seconds}:${milliseconds}`;
}

function updateTimeDisplay() {
    timeDisplay.textContent = formatTime(elapsedTime);
}

function startStopwatch() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        elapsedTime += 100;
        updateTimeDisplay();
    }, 100);
}

function pauseStopwatch() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    updateTimeDisplay();
    lapList.innerHTML = '';
    lapCount = 0;
}

function recordLap() {
    if (!isRunning) return;
    lapCount++;
    const lapTime = document.createElement('li');
    lapTime.textContent = `Lap ${lapCount}: ${formatTime(elapsedTime)}`;
    lapList.appendChild(lapTime);
}

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', recordLap);
