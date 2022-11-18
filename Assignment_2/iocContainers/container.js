import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import CustomerRepository from "../repositories/customerRepository.js";
import EmployeeRepository from "../repositories/employeeRepository.js";
import UserRepository from "../repositories/userRepository.js";
import CustomerService from "../services/customerService.js";
import EmployeeService from "../services/employeeService.js";
import UserService from "../services/userService.js";

export default class DependencyContainer{
    static addLogger() { return new MongoLogger();}
    static addUserRepository() {return new UserRepository();}
    static addUserService() { return new UserService();}

    static addEmployeeRepository() {return new EmployeeRepository();}
    static addEmployeeService() { return new EmployeeService();}

    static addCustomerRepository() {return new CustomerRepository();}
    static addCustomerService() { return new CustomerService();}
}