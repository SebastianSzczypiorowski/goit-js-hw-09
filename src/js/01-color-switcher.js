const body = document.querySelector('body'); 
const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

startBtn.addEventListener('click', () => {
    const randomHex = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`
    },1000)
})
stopBtn.addEventListener('click', () => {
    clearInterval(randomHex);
})