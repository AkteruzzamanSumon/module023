const person = {name: 'sumon', age: 25, job: 'facekbooker', gfName: 'sona moina', address: 'AndulBaria', phone:'01960952425',friends: ['limon', 'jontu', 'jewell']}


// const gfName = person.gfName;
// const phone = person.phone;

/*const {phone, gfName, friends, address} = person;
console.log(gfName, phone, address);*/


const  friends = ['rahim', 'korim', 'jarim', 'marim', 'farim'];
const [first, next, ...bakifriends] = friends;
console.log(first, next);

// const complexObject = {
//     name: 'abc',
//     info:{
//         address: 'kola bagan'
//         leader: 'Tiger leader'
//     }
// }
// const {leader} = complexObject.info;