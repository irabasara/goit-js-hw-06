const formEl = document.querySelector('.login-form');
const nameInputEl = document.querySelector('input[name="email"]');
const namePasswordEl = document.querySelector('input[name="password"]');


const OnSubmitClick = event => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (nameInputEl.value === '' || namePasswordEl.value === '') {
        alert('будь ласка, заповніть усі поля')
    } else {
        const userBase = {
            email: email.value,
            password: password.value,
        }
        console.log(userBase);
        event.currentTarget.reset();

    }
}


formEl.addEventListener('submit', OnSubmitClick)




