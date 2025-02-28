import { fakerES as faker } from "@faker-js/faker";

export const generatePet = () => {
    return {
        name : faker.animal.petName(),
        specie : faker.animal.type(),
        birthDate : faker.date.birthdate(),
        adopted : false,
        owner : null,
        image : faker.image.urlLoremFlickr()
    }
};