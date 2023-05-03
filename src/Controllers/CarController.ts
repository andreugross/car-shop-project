import { NextFunction, Request, Response } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car = new Car({ ...this.req.body });
    try {
      const newCar = await this.service.create(car as unknown as ICar);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllCars() {
    try {
      const allCars = await this.service.findAllCars();
      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }
  }
}