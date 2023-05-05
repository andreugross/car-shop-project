import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carOutput, newCar } from '../Mocks/CarMock';

const service = new CarService();

describe('Verifica a funcionalidades das rotas no Service de carros', function () {
  it('Verifica o funcionamento da função create', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    const result = await service.create(newCar);

    expect(result).to.be.deep.equal(carOutput);

    sinon.stub(Model, 'create').resolves(null);
    const resultError = await service.create(newCar);

    expect(resultError).to.be.deep.equal(null);
  });

  it('Verifica o funcionamento da função FINDALL', async function () {
    sinon.stub(Model, 'find').resolves([carOutput]);
    const result = await service.findAllCars();

    expect(result).to.be.deep.equal([carOutput]);
  });
});