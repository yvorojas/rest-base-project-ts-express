import server from '../../src';
import supertest from 'supertest';
import { connect, closeDatabase } from './mocks/mongo';

describe('User integration test', () => {
  let request;

  beforeAll(() => {
    jest.useFakeTimers();
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

  it('should get user info when call to user controller get user info method', async () => {
    const res = await request.get('/api/v1/user');
    expect(res.body).toEqual('Yvo Rojas');
  });
});
