import server from '../../src';
import supertest from 'supertest';
import { connect, closeDatabase } from './mocks/mongo';

describe('Demo integration tests', () => {
  let request;

  beforeAll(async () => {
    jest.mock(
      '../../src/infrastructure/repositories/mongoConnector',
      async () => {
        await connect();
      },
    );
    request = supertest(server);
  });

  afterAll(async done => {
    await closeDatabase();
    await server.close();
    done();
  });

  it('should get demo info when call to demo controller get demo info method', async () => {
    const res = await request.get('/api/v1/demo');
    expect(res.body).toStrictEqual({
      products: [
        {
          id: 'id1',
          price: 1500,
          quantity: 1,
        },
        {
          id: 'id1',
          price: 1500,
          quantity: 2,
        },
      ],
    });
  });

  it('should get another demo info when call to demo controller get another demo info method', async () => {
    const res = await request.get('/api/v1/demo/another');
    expect(res.body).toStrictEqual({
      products: [
        {
          id: 'id3',
          price: 1500,
          quantity: 1,
        },
        {
          id: 'id4',
          price: 1500,
          quantity: 2,
        },
      ],
    });
  });
});
