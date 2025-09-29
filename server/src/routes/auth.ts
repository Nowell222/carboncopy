import { Router } from 'express';
import { register, login, updateProfile } from '../controllers/authController';
import { validateAuth } from '../middleware/validation';

const router = Router();

router.post('/register', validateAuth, register);
router.post('/login', validateAuth, login);
router.put('/profile/:userId', updateProfile);

export default router;
