const body = document.querySelector('body'); 
const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function colorSwitcher(){
    let randomHex = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`
    },1000)
}
function stopInterval (){
    clearInterval(randomHex);
}

startBtn.addEventListener('click', colorSwitcher)
stopBtn.addEventListener('click', stopInterval)