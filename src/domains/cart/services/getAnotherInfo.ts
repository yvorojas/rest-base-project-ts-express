export default class GetInfoUseCase {
  static execute = () => ({
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
}
