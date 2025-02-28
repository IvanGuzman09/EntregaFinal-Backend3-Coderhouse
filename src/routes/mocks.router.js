import { Router } from 'express';
import mocksController from '../controllers/mocks.controller.js';

const router = Router();

router.get('/mockingpets/:pq?', mocksController.createMockingPets);

router.get('/mockingusers/:uq?', mocksController.createMockingUsers);

router.post("/generateData/:uq?/:pq?", mocksController.createMockingUsersAndPets)

export default router;