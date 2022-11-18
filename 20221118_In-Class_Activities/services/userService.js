import { users } from "../data/users.js"
import BaseService from "./baseService.js";

export default class UserService extends BaseService{
    constructor(loggers){
        super(users, loggers)
    }
}
