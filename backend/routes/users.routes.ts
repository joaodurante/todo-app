/**
 * Set the routes to general users routes
 * export: Router of users
 */

import * as express from 'express';
import { UsersRoutes } from '../controllers/users.controller';

const router = express.Router();
const mRoutes = new UsersRoutes();

router.post('/authenticate', mRoutes.authenticate);
router.get('/', mRoutes.findAll);
router.get('/:_id', [mRoutes.validateId, mRoutes.findOne]);
router.post('/', mRoutes.insert);
router.delete('/:_id', [mRoutes.validateId, mRoutes.findAndDelete]);

export { router as usersRouter };