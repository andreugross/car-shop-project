import { Router } from 'express';
import MotorcyvleController from '../Controllers/MotorcycleController';

const motorclycleRouter = Router();

motorclycleRouter.post('/', (req, res, next) => 
  new MotorcyvleController(req, res, next).create());
motorclycleRouter.get('/', (req, res, next) => 
  new MotorcyvleController(req, res, next).findAllMotorcycles());
motorclycleRouter.get('/:id', (req, res, next) => 
  new MotorcyvleController(req, res, next).findMotorcyclesById());

export default motorclycleRouter;