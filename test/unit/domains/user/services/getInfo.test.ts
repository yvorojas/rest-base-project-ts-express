import { mocked } from 'ts-jest/utils';
import GetUserInfoUseCase from '../../../../../src/domains/user/services/getInfo';
import User from '../../../../../src/domains/user/entities/User';

jest.mock('../../../../../src/domains/user/entities/User', () =>
  jest.fn().mockImplementation(() => ({ getFullName: () => 'DUMMY_INFO' })),
);

describe('get user info use case test', () => {
  const mockedUser = mocked(User, true);
  it('should return user info when execute method is called', () => {
    const userInfo = GetUserInfoUseCase.execute();
    expect(mockedUser).toHaveBeenCalledTimes(1);
    expect(userInfo).toStrictEqual('DUMMY_INFO');
  });
});
