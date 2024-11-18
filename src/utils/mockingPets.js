import { faker } from '@faker-js/faker';

export const generatePetsMock = (petsNum) => {
    let pets = [];
    
    for (let i = 0; i < petsNum; i++) {
        pets.push({
            name: faker.person.firstName(),
            specie: faker.animal.type(),
            birthDate: faker.date.past({ years: 2 }),
            adopted: false,
            owner: null,
            image: faker.image.urlLoremFlickr({ category: 'pets' })
        });
    }
    
    return pets;
};
