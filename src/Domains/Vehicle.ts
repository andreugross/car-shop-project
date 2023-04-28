import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  private _id?: string;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status?: boolean;
  private _buyValue: number;

  constructor(vehicle: IVehicle) {
    this._id = vehicle.id;
    this._model = vehicle.model;
    this._year = vehicle.year;
    this._color = vehicle.color;
    this._status = vehicle.status || false;
    this._buyValue = vehicle.buyValue;
  }

  public setId(id: string) {
    this._id = id;
  }

  public getId() {
    return this._id;
  }

  public setModel(model: string) {
    this._model = model;
  }

  public getModel() {
    return this._model;
  }

  public setYear(year: number) {
    this._year = year;
  }

  public getYear() {
    return this._year;
  }

  public setColor(color: string) {
    this._color = color;
  }

  public getColor() {
    return this._color;
  }

  public setStatus(status: boolean) {
    this._status = status;
  }

  public getStatus() {
    return this._status;
  }

  public setBuyValue(buyValue: number) {
    this._buyValue = buyValue;
  }

  public getBuyValue() {
    return this._buyValue;
  }
}