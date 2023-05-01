const formEl = document.querySelector('.login-form');
const nameInputEl = document.querySelector('input[name="email"]');
const namePasswordEl = document.querySelector('input[name="password"]');


const OnSubmitClick = event => {
    event.preventDefault();
    if (nameInputEl.value === '' || namePasswordEl.value === '') {
        alert('будь ласка, заповніть усі поля')
    } else {
        const emailValue = event.currentTarget.elements.email.value;
        const passwordValue = event.currentTarget.elements.password.value;
        console.log(`email: ${emailValue}, password: ${passwordValue}`);
        event.currentTarget.reset();

    }
}


formEl.addEventListener('submit', OnSubmitClick)




