import { generateUsersMock } from '../utils/mockingUsers.js';
import { generatePetsMock } from '../utils/mockingPets.js';
import { petsService, usersService } from '../services/index.js';

export const mockPets = (req, res) => {
    const pets = generatePetsMock(50); 
    res.send({ status: 'success', payload: pets });
  };
  
  export const mockUsers = (req, res) => {
    const users = generateUsersMock(50); 
    res.send({ status: 'success', payload: users });  };
  
  export const generateData = async (req, res) => {
    const users = parseInt(req.query.users) || 50;
    const pets = parseInt(req.query.pets) || 50;
    
    try {
      const mockDataUsers = generateUsersMock(users);
      const mockDataPets = generatePetsMock(pets);
  
      const insertedUsers = await usersService.insertMany(mockDataUsers);
      const insertedPets = await petsService.insertMany(mockDataPets);
  
      res.status(201).json({
      message: `Se crearon:
      - ${insertedUsers.length} usuarios
      - ${insertedPets.length} mascotas.
      Correctamente`,
      status: 'success',
      payload: {
          usersInserted: insertedUsers.length,
          petsInserted: insertedPets.length
      }
  });
    } catch (error) {
      res.status(500).json({ error: `Error al generar los datos. // ${error}`});
    }
  };