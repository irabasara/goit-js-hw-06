const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


const onOutputEl = event =>
    {if (event.currentTarget.value !== '') {
     outputEl.textContent = event.currentTarget.value;;
  } else {
    outputEl.textContent = 'Anonymous';
  }
   }


inputEl.addEventListener('input', onOutputEl);

