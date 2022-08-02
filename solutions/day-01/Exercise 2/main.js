import { countries } from './countries.js';
import { webTechs } from './web_tech.js';


console.log(countries, webTechs);


let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g, "").split(' ');
console.log(words)
console.log(words.length)





const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, "Green Tea")
console.log(shoppingCart)


if (countries.indexOf('Ethiopia') > -1) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}



const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)


prompt("Enter your age:")