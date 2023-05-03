import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createDomainCar(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  
  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createDomainCar(newCar);
  }

  public async findAllCars() {
    const carODM = new CarODM();
    const allCars = await carODM.find();
    const arrayCar = allCars.map((car: ICar) => this.createDomainCar(car));
    return arrayCar;
  }
}