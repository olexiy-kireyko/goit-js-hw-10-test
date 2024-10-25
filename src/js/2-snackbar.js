'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import circle from '/img/circle.svg';
import octagon from '/img/octagon.svg';

const promiseForm = document.querySelector('.form');

promiseForm.addEventListener('submit', event => {
  event.preventDefault();
  const delay = promiseForm.elements.delay.value;
  const state = promiseForm.elements.state.value;
  promiseForm.reset();
  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      resolve(delay);
    } else {
      reject(delay);
    }
  });
  promise
    .then(delay => {
      setTimeout(() => {
        iziToast.show({
          message: `✅ Fulfilled promise in ${delay}ms`,
          backgroundColor: '#59a10d',
          messageColor: 'white',
          layout: 2,
          closeOnClick: true,
          close: false,
          iconUrl: circle,
          position: 'topCenter',
          messageSize: 24,
          timeout: 4000,
        });
      }, delay);
    })
    .catch(delay => {
      setTimeout(() => {
        iziToast.show({
          message: `❌ Rejected promise in ${delay}ms`,
          backgroundColor: '#ef4040',
          messageColor: 'white',
          layout: 2,
          closeOnClick: true,
          close: false,
          iconUrl: octagon,
          position: 'topCenter',
          messageSize: 24,
          timeout: 4000,
        });
      }, delay);
    });
});
