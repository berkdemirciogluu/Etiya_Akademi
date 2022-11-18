import { orders } from "../data/orders.js";
import BaseService from "./baseService.js";

export default class OrderService extends BaseService{
    constructor(loggers){
        super(orders, loggers)
    }

    createOrder(order){
        if((this.checkIfProductIsValid(order) && this.checkIfUserIsValid(order))){
            orders.push(order)
        }
        console.log("Siparişinizi gözden geçiriniz..")
    } 

    checkIfProductIsValid(entity){
        let orderCriteria = orders.filter(x=> x.productId == entity.productId)
        if(orderCriteria.length==0){
            return false
        }
        return true
    }
    checkIfUserIsValid(entity){
        let orderCriteria = orders.filter(x=> x.userId == entity.userId)
        if(orderCriteria.length==0){
            return false
        }
        return true
    }
}