import { BaseLogger, MssqlLogger, FileLogger } from "./crossCuttingConcerns/logging/logger.js";
import OrderService from "./services/orderService.js";
import ProductService from "./services/productService.js";
import UserService from "./services/userService.js";

let logger1 = new FileLogger();
let logger2 = new MssqlLogger();
let loggers = [logger1,logger2]

const userService = new UserService(loggers);
const productService= new ProductService(loggers);
const orderSerService = new OrderService(loggers);
orderSerService.createOrder({id:100,productId:1,userId:1,orderNumber:"12345",status:"hazirlaniyor"})
console.log(orderSerService.getAll())

// console.log(userService.getAll())
// console.log(productService.getAll())
// productService.update({id: 4, name: "Mahmut", unitPrice: 9999, stock: 1})
// console.log(productService.getById(4));
// console.log(productService.getAll())


