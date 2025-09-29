import { Router } from 'express';
import { auth } from '../middleware/auth';

const router = Router();

router.get('/:userId', auth, (req, res) => {
  res.json({ message: 'Travel route placeholder' });
});

export default router;
