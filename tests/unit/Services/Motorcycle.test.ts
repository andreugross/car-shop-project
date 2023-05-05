import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import { afterEach } from 'mocha';
import MotorcyclesService from '../../../src/Services/MotorcycleService';
import { motoOutput, newMotorcycle } from '../Mocks/MotorcycleMock';

const service = new MotorcyclesService();
describe('Verifica a funcionalidades das rotas no Service de motorcycle', function () {
  afterEach(() => sinon.restore());
  
  it('Verifica se a função create retorna o objeto criado', async function () {
    sinon.stub(Model, 'create').resolves(motoOutput);
    const result = await service.create(newMotorcycle);

    expect(result).to.be.deep.equal(motoOutput);
  });

  it('Verifica se a função create retorna null caso não haja objeto', async function () {
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