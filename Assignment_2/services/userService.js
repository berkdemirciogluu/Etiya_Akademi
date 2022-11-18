import DependencyContainer from "../iocContainers/container.js"
import BaseService from "./baseService.js";

export default class UserService extends BaseService{
    constructor(){
        super(DependencyContainer.addUserRepository(),DependencyContainer.addLogger())
    }
}