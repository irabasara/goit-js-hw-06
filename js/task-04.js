const counterValueEl = document.querySelector('#value');
const btnDecrementEL = document.querySelector('button[data-action="decrement"]');
const btnIncrementEL = document.querySelector('button[data-action="increment"]');
let counterValue = 0;


const onClickIncrement = () => {
        counterValue += 1;
    counterValueEl.textContent = counterValue;
};

const onClickDecrement = () => {
        counterValue -= 1;
        counterValueEl.textContent = counterValue
};


btnDecrementEL.addEventListener("click", onClickDecrement);
btnIncrementEL.addEventListener('click', onClickIncrement);

