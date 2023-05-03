const userInputEl = document.querySelector('#validation-input');
const lengthOnEl = userInputEl.getAttribute('data-length');


const findLengthOnInputEl = (event) => {
    if (Number(event.currentTarget.value.length) === Number(lengthOnEl)) {
        userInputEl.classList.remove('invalid')
        userInputEl.classList.add('valid');
    } else {
        userInputEl.classList.remove('valid');
        userInputEl.classList.add('invalid');
    }
};

userInputEl.addEventListener('blur', findLengthOnInputEl);