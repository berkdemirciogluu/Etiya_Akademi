import { users } from "./user.js"

export class UserService {

    constructor(){
        this.userList = users
    }

    getAll()
    {
        return this.userList
    }

    getById(id)
    {
        return this.userList.find(user => user.id == id)
    }

    addUser(user)
    {
        this.userList.push(user)
    }

    deleteUser(id)
    {
        this.userList = this.userList.filter(user => user.id != id)
    }
}