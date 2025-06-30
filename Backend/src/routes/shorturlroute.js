import express from 'express';
import { generate_shortUrl } from '../controllers/shortUrl.js';
const router=express.Router();

router.post("/create",generate_shortUrl);

export default router;