import Notiflix from 'notiflix';

const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');
const createBtn = document.querySelector('button[type=submit]');

const createPromise = (position, delay) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
};

function onClickCreate(e) {
  e.preventDefault();
  for (let i = 0; i < amount.value; i += 1) {
    createPromise(i + 1, Number(delay.value) + i * Number(step.value))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
createBtn.addEventListener('click', onClickCreate);

console.log(delay);
