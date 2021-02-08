// const numbers = [3, 5, 6, 2, 7, 8, 1, 9];
// // const output = []
// // for(let i = 0; i < numbers.length; i++){
// //     const element = numbers[i];
// //     const result = element * element;
// //     output.push(result);
// // }

// // function square (element){
// //     return element * element;
// // }
// //const square = element => element * element;
// //const square = x => x * x;

// // const result = numbers.map(function(element){
// //     return element * element;
// // })
// const result = numbers.map( x => x * x)

// console.log(result);
//const numbers = [3, 5, 6, 2, 7, 8, 1, 9];
// function square(element){
//     return element * element;
// }
// const result = numbers.map(function(element){
//     return element * element
// })

//othoba------
//const square = element => element * element;
// const square = x => x * x;
//  const result = numbers.map(function(element){
//      return element * element
//  })
//const result = numbers.map( x => x * x)
// console.log(result)


//filter ar babohar--------
const numbers = [3, 8, 9, 6, 5, 11]
const bigger =numbers.find(x => x > 5)
console.log(bigger)