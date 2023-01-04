const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let intervalId = null;
const DELAY = 1000;

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
  refs.startBtn.setAttribute('disabled', '');
  refs.stopBtn.removeAttribute('disabled', '');
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    changeColor();
    return;
  }, DELAY);

  console.log('yehooo!');
}
function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
function onStopClick() {
  refs.stopBtn.setAttribute('disabled', '');
  refs.startBtn.removeAttribute('disabled', '');
  clearInterval(intervalId);
  console.log('yehoooooooooo!');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(refs.startBtn);
