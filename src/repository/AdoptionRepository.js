import GenericRepository from "./GenericRepository.js";

export default class AdoptionRepository extends GenericRepository {
    constructor(dao){
        super(dao);
    }
    getAdoptionById = (aid) =>{
        return this.getBy({_id:aid})
    }
}
