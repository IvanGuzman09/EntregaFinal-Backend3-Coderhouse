//import { userDao } from "../daos/persistence.js";
import Pet from "../daos/mongodb/Pets.dao.js"; //FIXME:
import Adoption from "../daos/mongodb/Adoption.js"; //FIXME:

//import UserRepository from "../repositories/UserRepository.js";
import PetRepository from "../repositories/PetRepository.js";
import AdoptionRepository from "../repositories/AdoptionRepository.js";

//export const usersService = new UserRepository(new Users()); //FIXME:
export const petsService = new PetRepository(new Pet());
export const adoptionsService = new AdoptionRepository(new Adoption());
