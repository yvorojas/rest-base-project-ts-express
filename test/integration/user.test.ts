import server from '../../src'
import supertest from 'supertest'

describe('User integration test', () => {
  let request

  beforeAll(()=>{
    request = supertest(server)
  })

  afterAll(done => {
    server.close();
    done();
});

  it('should get user info when call to user controller get user info method', async() =>{
    const res = await request.get('/api/v1/user')
    expect(res.body).toEqual('Yvo Rojas')
  })
});
