import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail'; 
  private engineCapacity: number;
  
  constructor(
    moto: IMotorcycle,
  ) {
    super(moto);
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  public getcategory() {
    return this.category;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}