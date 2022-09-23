// const test = document.getElementById('item');
// console.log(test);

// const test2 = document.getElementsByTagName('ul')
// console.log(test2)

// const test3 = document.getElementsByClassName('test')
// console.log(test3)

const test = document.querySelector('#item')
console.log(test)

const test2 = document.querySelectorAll('li')
console.log(test2)

const ulList = document.querySelector('ul')
console.log(ulList)

const liItem = ulList.querySelector('li')
console.log(liItem)

//żywe kolekcje
const newLi = document.createElement('li')
ulList.appendChild(newLi).textContent = '👀'