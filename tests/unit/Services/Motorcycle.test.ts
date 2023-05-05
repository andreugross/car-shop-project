import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycles from '../../../src/Domains/Motorcycle';
import IMotorcycles from '../../../src/Interfaces/IMotorcycle';
import MotorcyclesService from '../../../src/Services/MotorcycleService';

describe('Verifica atuação do CRUD na rota /motorcycles no arquivo SERVICE', function () {
  const service = new MotorcyclesService();
  const motoInput: IMotorcycles = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.0,
    category: 'Street',
    engineCapacity: 600,
  };
  const motoOutput: Motorcycles = new Motorcycles({ id: '1', ...motoInput });

  it('Verifica o funcionamento da função REGISTER', async function () {
    Sinon.stub(Model, 'create').resolves(motoOutput);
    const result = await service.create(motoInput);

    expect(result).to.be.deep.equal(motoOutput);
    Sinon.restore();

    Sinon.stub(Model, 'create').resolves(null);
    const resultError = await service.create(motoInput);

    expect(resultError).to.be.deep.equal(null);
    Sinon.restore();
  });

  it('Verifica o funcionamento da função FINDALL', async function () {
    Sinon.stub(Model, 'find').resolves([motoOutput]);

    const result = await service.findAllMotorcycles();

    expect(result).to.be.deep.equal([motoOutput]);
    Sinon.restore();
  });
});