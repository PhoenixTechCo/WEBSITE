import express from 'express';
import { getTeamMembers, createTeamMember } from '../controllers/teamControllers.js';

const router = express.Router();

router.route('/').get(getTeamMembers).post(createTeamMember);

export default router;
