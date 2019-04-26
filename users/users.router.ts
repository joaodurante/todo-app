import * as express from 'express';
import { User } from './users.model';
import { UsersRoutes } from './users.routes';

const router = express.Router();
const mRoutes = new UsersRoutes(User);

router.get('/', mRoutes.findAll);
router.get('/:_id', [mRoutes.validateId, mRoutes.findOne]);
router.post('/', mRoutes.insert);
router.patch('/:_id', [mRoutes.validateId, mRoutes.findAndUpdate]);
router.delete('/:_id', [mRoutes.validateId, mRoutes.findAndDelete]);

export { router as usersRouter };