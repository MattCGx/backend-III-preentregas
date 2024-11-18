import { Router } from 'express';
import { mockPets, mockUsers, generateData } from '../controllers/mock.controller.js';

const router = Router();

router.get('/mockingpets', mockPets);
router.get('/mockingusers', mockUsers);
router.post('/generatedata', generateData);

export default router;