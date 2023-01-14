const body = document.querySelector('body'); 
const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }



startBtn.addEventListener('click', event => {
    event.preventDefault();
    startBtn.disabled = true;
    stopBtn.disabled = false;
    randomHex = setInterval(() => {
       body.style.backgroundColor = `${getRandomHexColor()}`
   },1000)
})
stopBtn.addEventListener('click', () => {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    if(randomHex){    
        clearInterval(randomHex);
    }
})