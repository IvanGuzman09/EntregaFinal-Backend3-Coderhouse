import { petsService } from "../services/index.js";
import UserServices from "../services/userServices.js";
import { generatePet } from "../utils/pet.utils.js";
import { generateUser } from "../utils/user.utils.js";

const US = new UserServices();

const createMockingPets = async (req, res) => {
    try {
        const quantity = req.params.pq || 10;
        const pets = [];
        
        for (let i = 0; i < quantity; i++) {
            pets.push(generatePet());
        }
    
        console.log(quantity, " Mocks de mascotas creados.");
    
        const result = await petsService.create(pets);
        res.send({status:"success",payload:result});
    } catch (error) {
        console.error(error.message);
        res.json({status: 500, message: error.message});
    }
}

const createMockingUsers = async (req, res) => {
    try {
        const quantity = req.params.uq || 10;
        const payload = [];

        for (let i = 0; i < quantity; i++) {
            payload.push(await US.createUser(generateUser()));
        }
    
        console.log(quantity, " Mocks de usuarios creados.");
    
        res.send({status:"success",payload });
    } catch (error) {
        console.error(error);
        res.json({status: 500, message: error.message});
    }
}

const createMockingUsersAndPets = async (req, res) => {
    try {
        const pq = req.params.pq || 10;
        const pets = [];
        
        for (let i = 0; i < pq; i++) {
            pets.push(generatePet());
        }
    
        console.log(pq, " Mocks de mascotas creados.");
    
        const result = await petsService.create(pets);

        const uq = req.params.uq || 10;
        const payload = [];

        for (let i = 0; i < uq; i++) {
            payload.push(await US.createUser(generateUser()));
        }
    
        console.log(uq, " Mocks de usuarios creados.");
        payload.push(result);

        res.send({status:"success",payload});
    } catch (error) {
        console.error(error.message);
        res.json({status: 500, message: error.message});
    }
}

export default {
    createMockingPets,
    createMockingUsers,
    createMockingUsersAndPets
}