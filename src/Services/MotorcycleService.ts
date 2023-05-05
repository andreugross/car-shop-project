import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MorcycleODM';

export default class MotorcyclesService {
  private createDomainMoto(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async create(moto: IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const newMoto = await motoODM.create(moto);
    return this.createDomainMoto(newMoto);
  }

  public async findAllMotorcycles() {
    const motoODM = new MotorcycleODM();
    const allMotos = await motoODM.find();
    const arrayMoto = allMotos.map((moto: IMotorcycle) => this.createDomainMoto(moto));
    return arrayMoto;
  }

  public async findById(id: string) {
    const motoODM = new MotorcycleODM();
    const moto = await motoODM.findById(id);
    return this.createDomainMoto(moto as unknown as IMotorcycle);
  }
}