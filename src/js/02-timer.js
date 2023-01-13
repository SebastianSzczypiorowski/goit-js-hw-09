import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const Input = document.querySelector('input')
const Days = document.querySelector('[data-days]');
const Hours = document.querySelector('[data-hours]');
const Minutes = document.querySelector('[data-minutes]');
const Seconds = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]')

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  }
  
  const fp = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
 
  })

 

// Input.addEventListener('input' , () => {
//   let inputDate = new Date(Input.value).getTime();
//   if(inputDate = Date.now()) {
//     startBtn.disabled = true;
//   } else {
//     startBtn.disabled=false;
//   }
// })


  
 

  startBtn.addEventListener('click' , event => {
        event.preventDefault();
        const Timer = setInterval(() => {
        const test = new Date(fp.selectedDates[0]).getTime();
        const today = new Date().getTime();
        const selectDate = new Date(fp.selectedDates[0]).getTime();
        let ms = selectDate - today;
      
        ms --;
        function addLeadingZero(value) {
            return String(value).padStart(2, '0');
        }
        const result = convertMs(ms);

        if(ms < 0){
            clearInterval(Timer);
            Notiflix.Notify.failure('Please choose a date in the future')
        } if (ms = 0) {
            clearInterval(Timer);
        } else {
          startBtn.disabled = false;
            Days.innerHTML = addLeadingZero(result.days)
            Hours.innerHTML = addLeadingZero(result.hours)
            Minutes.innerHTML = addLeadingZero(result.minutes)
            Seconds.innerHTML = addLeadingZero(result.seconds)
            startBtn.disabled = true;
        }
        
        

        console.log(convertMs(ms))
    }, 1000)
  
  })
