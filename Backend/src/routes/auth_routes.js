import express from 'express';
import {login,register,get_user} from '../controllers/auth_controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router=express.Router();

router.post('/login',login);
router.post('/register',register);
router.get('/me',authMiddleware,get_user)

export default router;