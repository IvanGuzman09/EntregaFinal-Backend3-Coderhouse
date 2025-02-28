import { fakerES as faker } from "@faker-js/faker";

export const generateUser = () => {
    const first_name = faker.person.firstName();
    const last_name = faker.person.lastName();
    return {
        first_name,
        last_name,
        email: faker.internet.email({firstName: first_name, lastName: last_name, allowSpecialCharacters:true}),
        age: faker.number.int({min: 0, max: 150}),
        password: "coder123",
        role: faker.helpers.arrayElement(["user", "admin"]),
        pets: []
    }
};