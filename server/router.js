import express, { Router } from 'express';

import { index } from './controllers/people';

const router = Router();

router.route('/people.json').get(index);

export default router;