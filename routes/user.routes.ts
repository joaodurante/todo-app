import * as express from 'express';
import { UserRoutes } from '../controllers/user.controller';

const router = express.Router();
const mRoutes = new UserRoutes();

router.get('/', [mRoutes.validateUser, mRoutes.getAllTasks]);
router.patch('/', [mRoutes.validateUser, mRoutes.createTask, mRoutes.getAllTasks]);
router.delete('/', [mRoutes.deleteTask, mRoutes.getAllTasks]);

export { router as userRouter };