/**
 * Set the routes to logged user
 * export: Router of logged user
 */

import * as express from 'express';
import { UserRoutes } from '../controllers/user.controller';

const router = express.Router();
const mRoutes = new UserRoutes();

router.get('/', [mRoutes.validateUser, mRoutes.getAllTasks]);
router.post('/', [mRoutes.validateUser, mRoutes.createTask, mRoutes.getAllTasks]);
router.patch('/task/:_id', [mRoutes.validateUser, mRoutes.completeTask, mRoutes.getAllTasks]);
router.delete('/:_id', [mRoutes.deleteTask, mRoutes.getAllTasks]);

export { router as userRouter };