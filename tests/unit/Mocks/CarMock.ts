import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

export const newCar: ICar = {
  model: 'Gol',
  year: 1990,
  color: 'White',
  buyValue: 20.990,
  doorsQty: 2,
  seatsQty: 5,
};

export const carUpdate: ICar = {
  model: 'Gol',
  year: 1990,
  color: 'White',
  buyValue: 18.000,
  doorsQty: 2,
  seatsQty: 5,
};

export const carOutput: Car = new Car({ id: '1', ...newCar });