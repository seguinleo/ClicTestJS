let timer = 10.0;
let counter = 0;
let isTimerRunning = false;
let intervalId = null;
const cpsElement = document.getElementById('cps');
const clickerElement = document.getElementById('clicker');
const resetButton = document.getElementById('reset');
const info = document.getElementById('info');

function updateCPS(cps) {
  cpsElement.textContent = `Clics par seconde : ${cps.toFixed(1)}`;
}

function startTimer() {
  intervalId = setInterval(() => {
    timer -= 0.1;
    if (timer <= 0) {
      timer = 0;
      clearInterval(intervalId);
      intervalId = null;
      isTimerRunning = false;
      clickerElement.removeEventListener('mousedown', handleClick);
      updateCPS(counter / 10);
    }
    info.children[0].textContent = `Timer : ${timer.toFixed(1)}s`;
  }, 100);
}

function handleClick() {
  if (!isTimerRunning) {
    startTimer();
    isTimerRunning = true;
  }
  counter += 1;
  info.children[1].textContent = `Nombre : ${counter}`;
}

function resetClickTest() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  timer = 10.0;
  counter = 0;
  isTimerRunning = false;
  updateCPS(0);
  info.children[0].textContent = 'Timer : 10.0s';
  info.children[1].textContent = 'Nombre : 0';
  cpsElement.textContent = '';
  clickerElement.addEventListener('mousedown', handleClick);
}

resetButton.addEventListener('click', resetClickTest);
clickerElement.addEventListener('mousedown', handleClick);
