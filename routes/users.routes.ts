import * as express from 'express';
import { User } from '../models/users.model';
import { UsersRoutes } from '../controllers/users.controller';

const router = express.Router();
const mRoutes = new UsersRoutes(User);

router.post('/authenticate', mRoutes.authenticate);
router.get('/', [mRoutes.authorize, mRoutes.findAll]);
router.get('/:_id', [mRoutes.validateId, mRoutes.findOne]);
router.post('/', mRoutes.insert);
router.patch('/:_id', [mRoutes.validateId, mRoutes.findAndUpdate]);
router.delete('/:_id', [mRoutes.validateId, mRoutes.findAndDelete]);

export { router as usersRouter };