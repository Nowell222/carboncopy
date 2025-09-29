import { Router } from 'express';
import { getEmissions, calculateAndSaveEmission, getEmissionStats } from '../controllers/emissionsController';
import { auth } from '../middleware/auth';

const router = Router();

router.get('/:userId', auth, getEmissions);
router.post('/calculate', auth, calculateAndSaveEmission);
router.get('/:userId/stats', auth, getEmissionStats);

export default router;
