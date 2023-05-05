import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

export const newMotorcycle: IMotorcycle = {
  model: 'Kawasaki Ninja H2R',
  year: 2020,
  color: 'black',
  status: true,
  buyValue: 350.000,
  category: 'Custom',
  engineCapacity: 1000,
};

export const motoOutput: Motorcycle = new Motorcycle({ id: '1', ...newMotorcycle });