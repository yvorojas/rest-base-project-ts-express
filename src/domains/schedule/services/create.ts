import Schedule, { ISchedule } from '../model/Schedule';
import { Request } from 'express';

export default class CreateUseCase {
  static execute = async (request: Request) => {
    const productsList = [];

    request.body.products.forEach(function(value) {
      const products = {
        sku: value.sku,
        offerId: value.offerId,
        quantity: value.quantity,
        deliveryMethods: value.deliveryMethods,
        pickUpStoreCode: value.pickUpStoreCode,
        sellerId: value.sellerId,
      };
      productsList.push(products);
    });

    console.log(Schedule);
    const schedule = new Schedule();
    schedule.products = productsList;
    schedule.region = request.body.region;
    schedule.country = request.body.country;
    schedule.localityCode = request.body.localityCode;

    Schedule.create(schedule);
  };
}
