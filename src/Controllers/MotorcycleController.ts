import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcyclesService from '../Services/MotorcycleService';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcyvleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async create() {
    const moto = new Motorcycle({ ...this.req.body });
    try {
      const newMoto = await this.service.create(moto as unknown as IMotorcycle);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllMotorcycles() {
    try {
      const allMotos = await this.service.findAllMotorcycles();
      return this.res.status(200).json(allMotos);
    } catch (error) {
      this.next(error);
    }
  }

  public async findMotorcyclesById() {
    const { id } = this.req.params;
    try {
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
      const idMoto = await this.service.findById(id);
      if (!idMoto) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(idMoto);
    } catch (error) {
      this.next(error);
    }
  }
}