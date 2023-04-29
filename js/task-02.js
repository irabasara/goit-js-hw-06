const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients')
const LiItemEl = ingredients.map(text => {
  const liEl = document.createElement('li')
  liEl.textContent = text
  liEl.classList.add('item')
  return liEl
})

ulEl.append(...LiItemEl);
