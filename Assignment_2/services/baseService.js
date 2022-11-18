export default class BaseService{
    constructor(repository,logger){
        this.repository = repository;
        this.logger = logger;
    }

    getAll(){
        return this.repository.getAll();
    }

    add(entity){
        this.repository.add(entity);
        this.logger.log(entity);
    }
    getById(id){
        return this.repository.getById(id) ?? null;
    }
    delete(id){
        this.repository.delete(id);
    }
    update(model){
        this.repository.update(model);
    }
}