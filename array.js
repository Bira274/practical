// creatiing an array 
let fruits = ['Apple', 'Banana', 'Orange']

// looping an array
// for (i=0; i<3; i++) {
//     console.log(fruits[i])
// }

// fruits.forEach(function(item,index){console.log(item,index)})

// adding an item 
fruits.push('Lemon')
// console.log(fruits)
fruits[fruits.length]='Pineapple'
// console.log(fruits)

// remove item from beginning 
let first = fruits.shift()
// console.log(fruits)

// add item to beginning 
let newLen = fruits.unshift('Strawberry')
// console.log(fruits)

// finding item index 
let pos = fruits.indexOf('Orange')
// console.log(pos)

// remove and leave certain number of items
// let removedItem = fruits.splice(1)
// console.log(fruits)

// let posOne=fruits[0]
// console.log(posOne)

// console.log(fruits)

fruits[3]='Apple'
// console.log(fruits)

// console.log(fruits[fruits.length-1])