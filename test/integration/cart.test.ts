import server from '../../src';
import supertest from 'supertest';

describe('Cart integration tests', () => {
  let request;

  beforeAll(() => {
    request = supertest(server);
  });

  afterAll(done => {
    server.close();
    done();
  });

  it('should get cart info when call to cart controller get cart info method', async () => {
    const res = await request.get('/api/v1/cart');
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

  it('should get another cart info when call to cart controller get another cart info method', async () => {
    const res = await request.get('/api/v1/cart/another');
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
