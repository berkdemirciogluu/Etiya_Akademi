import { products } from "../data/product.js";
import BaseService from "./baseService.js";

export default class ProductService extends BaseService {
    constructor(loggers){
        super(products,loggers)
    }
    
};
