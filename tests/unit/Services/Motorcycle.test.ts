import sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import MotorcyclesService from '../../../src/Services/MotorcycleService';
import { motoOutput, newMotorcycle } from '../Mocks/MotorcycleMock';

const service = new MotorcyclesService();

describe('Verifica a funcionalidades das rotas no Service de carros', function () {
  it('Verifica o funcionamento da função create', async function () {
    sinon.stub(Model, 'create').resolves(motoOutput);
    const result = await service.create(newMotorcycle);
  
    expect(result).to.be.deep.equal(motoOutput);
  
    sinon.stub(Model, 'create').resolves(null);
    const resultError = await service.create(newMotorcycle);
  
    expect(resultError).to.be.deep.equal(null);
  });
  
  it('Verifica o funcionamento da função FINDALL', async function () {
    sinon.stub(Model, 'find').resolves([motoOutput]);
    const result = await service.findAllMotorcycles();
  
    expect(result).to.be.deep.equal([motoOutput]);
  });
});