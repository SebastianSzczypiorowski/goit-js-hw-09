const body = document.querySelector('body'); 
const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


 const randomHex = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`
    },1000)
const stopRandomHex = stopInterval(randomHex);
startBtn.addEventListener('click', randomHex)
stopBtn.addEventListener('click', stopRandomHex)