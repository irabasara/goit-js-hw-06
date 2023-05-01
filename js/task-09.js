function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColorEl = document.querySelector('.change-color');
const nameOfColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');


const onButtonChangeColorEl = () => {
  nameOfColorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}


buttonChangeColorEl.addEventListener('click', onButtonChangeColorEl);



