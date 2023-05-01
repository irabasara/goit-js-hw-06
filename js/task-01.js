// const itemEl = document.querySelectorAll('li.item')
// console.log('Number of categories: ', itemEl.length)


// itemEl.forEach(element => {
//     console.log('Category: ', element.querySelector('h2').textContent)
//     console.log('Elements: ', element.querySelectorAll('li').length)
// })


const categoriesEl = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${categoriesEl}`);

const itemsEl = document.querySelectorAll(".item");
itemsEl.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});