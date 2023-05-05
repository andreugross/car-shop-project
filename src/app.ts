import express from 'express';
import carRouter from './Routes/CarRoutes';
import motorclycleRouter from './Routes/MotorcycleRoutes';

const app = express();
app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorclycleRouter);

export default app;
