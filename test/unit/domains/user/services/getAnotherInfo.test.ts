import GetAnotherInfoUseCase from '../../../../../src/domains/demo/services/getAnotherInfo';

describe('get user info use case test', () => {
  it('should return user info when execute method is called', () => {
    const expectedResponse = {
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
    };

    const demoInfo = GetAnotherInfoUseCase.execute();
    expect(demoInfo).toStrictEqual(expectedResponse);
  });
});
