import CreateUseCase from '../../../../src/domains/schedule/services/create';
import { Request } from 'express';
import Schedule from '../../../../src/domains/schedule/model/Schedule';

const mockRequest = {
  body: {
    products: [
      {
        sku: '12345',
        offerId: '12345',
        quantity: 2,
        deliveryMethods: ['RT'],
        pickUpStoreCode: 'X',
        sellerId: '1',
      },
      {
        sku: '98765',
        offerId: '98765',
        quantity: 3,
        deliveryMethods: ['DD'],
        pickUpStoreCode: 'X',
        sellerId: '2',
      },
    ],
    region: 'A',
    country: 'CL',
    localityCode: 'LD',
  },
} as Request;

describe('CreateUseCase', () => {
  it('should return OK when execute method is called', async () => {
    jest.spyOn(Schedule, 'create').mockImplementation(() => 'prueba');
    const scheduleInfo = await CreateUseCase.execute(mockRequest);
    expect(Schedule.create).toHaveBeenCalledTimes(1);
  });
});
