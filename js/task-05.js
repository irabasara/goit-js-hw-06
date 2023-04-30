const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


const onOutputEl = event =>
    outputEl.textContent = event.currentTarget.value;


inputEl.addEventListener('input', onOutputEl);

