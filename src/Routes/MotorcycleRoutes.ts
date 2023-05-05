import { Router } from 'express';
import MotorcyvleController from '../Controllers/MotorcycleController';

const motorclycleRouter = Router();

motorclycleRouter.post('/', (req, res, next) => new MotorcyvleController(req, res, next).create());

export default motorclycleRouter;