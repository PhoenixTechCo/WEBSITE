import express from 'express';
import { getServices, createService } from '../controllers/serviceControllers.js';

const router = express.Router();

router.route('/').get(getServices).post(createService);

export default router;
