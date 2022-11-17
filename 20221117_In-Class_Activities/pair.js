import { users } from "./user.js";
import { UserService } from "./userService.js";

//getAll, getById(id), add, delete(id)

let userList = users;

const getAll = () => {
    return userList
}

const getById = (id) => {
    return userList.find(user => user.id == id) ?? null
}

const add = (user) => {
    userList.push(user)
}

const deleteUser = (id) => {
    userList = userList.filter(user => user.id != id)
}

let user1 =     {
    id: 100,
    firstName: "Beytullah",
    lastName: "Zor",
    city:"Ankara",
    age: 36,
    creditCardNumber: "123456",
    type: "customer"
}

let userService = new UserService()
console.log(userService.addUser(user1))
console.log(userService.getAll())
userService.deleteUser(100)
console.log(userService.getAll())
userService.deleteUser(5)
console.log(userService.getAll())



