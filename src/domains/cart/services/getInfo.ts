export default class GetInfoUseCase {
  static execute = () => ({
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
}
