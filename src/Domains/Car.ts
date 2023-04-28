import Vehicle from './Vehicle';
import ICar from '../Interfaces/ICar';

export default class Car extends Vehicle {
  private _doorsQty: number;
  private _seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this._doorsQty = car.doorsQty;
    this._seatsQty = car.seatsQty;
  }

  public setDoorsQty(doorsQty: number) {
    this._doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this._doorsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this._seatsQty = seatsQty;
  }

  public getSeatsQty() {
    return this._seatsQty;
  }
}