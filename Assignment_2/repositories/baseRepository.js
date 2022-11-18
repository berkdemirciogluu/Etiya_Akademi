import { users } from "../data/user.js";

export default class BaseRepository{
    constructor(type){
        this.users = users.filter(user => user.type === type);
    }
    getAll(){
        return this.users;
    }

    getById(id){
        return this.users.find(user => user.id === id);
    }
    add(user){
        this.users.push(user);
    }
    update(model){
        this.users[this.users.findIndex(user => user.id ===model.id)] = model;
    }
    delete(id){
        this.users = this.users.filter(user => user.id != id);
    }
}