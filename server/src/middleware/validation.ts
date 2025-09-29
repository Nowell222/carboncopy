import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateAuth = [
  body('email').isEmail().withMessage('Valid email required'),
  body('name').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }
    next();
  },
];
