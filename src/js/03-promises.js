import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => resolve({ position, delay }), delay);
    } else {
      setTimeout(() => reject({ position, delay }), delay);
    }
  });
}

const form = document.querySelector('.form');
const btn = document.querySelector('button');

form.addEventListener('submit', event => {
event.preventDefault();

const firstDelay = Number(form.delay.value);
const step = Number(form.step.value);
const amount = Number(form.amount.value);

for(let i = 0 ; i < amount; i++) {
const position = i + 1;
const delay = firstDelay + step * i;

createPromise(position,delay).then(({ postion, delay}) => {Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);}) .catch(({ position, delay}) => {Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);})}})