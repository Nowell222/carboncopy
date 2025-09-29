import { Router } from 'express';
import { auth } from '../middleware/auth';

const router = Router();

router.get('/:id', auth, (req, res) => {
  res.json({ message: 'User route placeholder' });
});

export default router;
