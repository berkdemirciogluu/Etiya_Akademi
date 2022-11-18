import { FileLogger, MssqlLogger, BaseLogger } from './crossCuttingConcerns/logging/logger.js';
import { users } from './data/users.js'
import UserService  from './services/userService.js';
// console.log(users);
// usersta crud

let user1 ={
    id: 100,
    firstName: "Ali Can",
    lastName: "Demirkılıç",
    city:"Ankara",
    age: 36,
    creditCardNumber: "99999",
    type: "customer"
}

// let getAllUser = ()=>{
// return users
// }
// getAllUser();

// const add = (user)=>{
//     users.push(user)  //user i pushladık
// }
// const getUserById = (id)=>{
//     return users.find(user => user.id==id)   // userı idyi find method ile bulduk 
// }

// const deleteUser  = (id)=>{
//     let userToDelete = getById(id)
//     let index = users.indexOf(userToDelete)
//     users.splice(index,1)  // index dediğimz yer buradan başla bu kadar sil yapmış olduk 
// }
// add(user1)
// console.log(getAllUser())
// deleteUser(100)
// console.log(getAllUser())



// consoel.log("---------------------------   HALİT HOCA EDTİON   ----------------------------------------")

// //users const olduğu için önce bi referans tip oluşturuyoruz
// let userList = users;

// let getAll= () =>{
//     return userList;
// }

// let getById2 = ()=> {
//     let userFind = userList.find( user => user.id === id)
//     return userFind ?? null   //?? işareti bulamazsa ne yapacağını soruyor 
// }

// let addUser = (user) => {
// userList.push(user);
// }

// let addUser2 = (id, firstName, lastName, city, age, salary,type) => {
//     userList.push(id, firstName, lastName, city, age, salary,type);
//     }

// function deletId(){
//     userList = userList.filter(user=> user.id !== id)  //id si denk olmayanları getir demek yani silinmiş gibi gözükecek
// }

// let x = new UserService();
// console.log(x.getAllUser())
// console.log(x.getUserById(1))
// console.log(x.add(user1))
// console.log(x.getAllUser())



let logger = new FileLogger();
let logger1 = new MssqlLogger();

let loggers = [logger, logger1];
// polymorphism
let userService = new UserService(loggers);
userService.getAllUser();
// userService.add({ id: 1 })