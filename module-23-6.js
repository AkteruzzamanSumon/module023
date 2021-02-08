const students = [
    {id: 27, name: 'sumon'},
    {id: 26, name: 'Akter'},
    {id: 21, name: 'janeman'},
    {id: 45, name: 'moyouri'},
    {id: 70, name: 'dipjol'},
    //{id: 55, name: 'Mannada'},
];
const names = students.map(x => x.name);
const ids = students.map(x => x.id)
const biggerId = students.filter(x => x.id>40)
const bigger = students.find(x => x.id>40)
// console.log(names)
// console.log(ids)
// console.log(biggerId)
console.log(bigger)
// for(let i = 0; i < students.length; i++){
//     const element = student[i];
//     console.log(element);
// }

//const result = students.map(x => x )