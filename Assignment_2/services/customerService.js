import DependencyContainer from "../iocContainers/container.js"
import BaseService from "./baseService.js"

export default class CustomerService extends BaseService{
    constructor(){
        super(DependencyContainer.addCustomerRepository(),DependencyContainer.addLogger())
    }
}