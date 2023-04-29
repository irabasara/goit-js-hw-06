const itemEl = document.querySelectorAll('li.item')
console.log('Number of categories: ', itemEl.length)


itemEl.forEach((element) => {
    console.log('Category: ', element.querySelector('h2').textContent)
    console.log('Elements: ', element.querySelectorAll('li').length)
})


