export default class BaseService {
    constructor(list,loggers) {
        this.list = list
        this.loggers=loggers
    }
    getAll() {
        this.addLog("Get All works");
        return this.list
    }

    add(entity) {
        this.add("Add Works");
        this.list.push(entity)
    }
    getById(id) {
        return this.list.find(entity => entity.id == id)
    }
    delete(id) {
        this.list = this.list.filter(entity => entity.id !== id)

    }
    update(entity){
        this.list[this.list.findIndex(x=>x.id== entity.id)]= entity

    }
    addLog(message){
        for (let logger of this.loggers) {
            logger.log(message)  
        }
    }
}
