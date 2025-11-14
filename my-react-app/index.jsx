/* 
chalenge 1:
given an array of numbers, return an array of each number, squared*/
const nums =[1,2,3,4,5]
//-->       [1,4,9,16,25]
// your code here
const squares = nums.map(function(num) {
    return num * num
})

console.log(squares)


/*
chalenge 2:
given an array of strings ,return an array where the first letter of each string is capitalized
*/

const name =["alice","bob","charlie","danielle"]
// -->      []
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

console.log(capitalized)
