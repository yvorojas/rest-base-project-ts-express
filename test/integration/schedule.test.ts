import server from '../../src';
import supertest from 'supertest';
import { connect, closeDatabase } from './mocks/mongo';

describe('Schedule integration test', () => {
  let request;

  beforeAll(async () => {
    jest.mock('../../src/infrastructure/config/database', async () => {
      await connect();
    });
    request = supertest(server);
  });

  afterAll(async done => {
    await closeDatabase();
    await server.close();
    done();
  });

  it('should get cart info when call to cart controller get cart info method', async () => {
    const res = await request
      .post('/api/v1/schedule/create')
      .send({
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
      })
      .expect(200);
  });
});
