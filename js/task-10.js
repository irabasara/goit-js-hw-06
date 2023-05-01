function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controlsEl = document.querySelector('#controls')
const quantityEl = document.querySelector('input[type="number"]');
const crateButtonEl = document.querySelector('button[data-create]');
const destroyButtonEl = document.querySelector('button[data-destroy]');
const newDivBoxEl = document.querySelector('#boxes');
controlsEl.style.display = 'flex';
controlsEl.style.justifyContent = 'center';
controlsEl.style.gap = '15px';


let amount = 0;

const createBoxes = (amount) => {
  amount = quantityEl.value;
  let sizeBox = 30;
  const boxArr = []
  for (let i = 0; i < amount; i += 1) {
    sizeBox += 10;
    // const div = `<div style = 'display:block; margin: 0 auto; width:${sizeBox}px; height:${sizeBox}px; background-color: ${getRandomHexColor()};'></div>`;
    
      const divElement = document.createElement('div');
      divElement.style.height = `${sizeBox}px`;
      divElement.style.width = `${sizeBox}px`;
      divElement.style.backgroundColor = getRandomHexColor();
      divElement.style.margin = 'auto';

    boxArr.push(divElement)
  }
 newDivBoxEl.append(...boxArr);
};

const destroyBoxes = () => 
 { newDivBoxEl.innerHTML = '';
  quantityEl.value = '';
}

  

crateButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);







