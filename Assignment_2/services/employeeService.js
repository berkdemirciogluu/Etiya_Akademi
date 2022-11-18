import DependencyContainer from "../iocContainers/container.js"
import BaseService from "./baseService.js";

export default class EmployeeService extends BaseService{
    constructor(){
        super(DependencyContainer.addEmployeeRepository(),DependencyContainer.addLogger())
    }
}