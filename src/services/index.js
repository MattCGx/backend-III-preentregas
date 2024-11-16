import Users from "../dao/Users.dao.js";
import Pet from "../dao/Pets.dao.js";


import UserRepository from "../repository/UserRepository.js";
import PetRepository from "../repository/PetRepository.js";


export const usersService = new UserRepository(new Users());
export const petsService = new PetRepository(new Pet());

