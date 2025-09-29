import { Router } from 'express';
import { auth } from '../middleware/auth';

const router = Router();

router.post('/chat', auth, (req, res) => {
  res.json({ message: 'AI chat route placeholder' });
});

export default router;
