import { Request } from 'express';
import { miraklClient } from '../clients/mirakl';
import { matrixClient } from '../clients/matrix';

export default class OrchestatorUseCase {
  static execute = async (request: Request) => {
    const productListMirakl = [];
    const productListMatrix = [];

    request.body.products.forEach(function(value) {
      if (value.sellerId === '1') {
        const products = {
          sku: value.sku,
          offerId: value.offerId,
          quantity: value.quantity,
          deliveryMethods: value.deliveryMethods,
          pickUpStoreCode: value.pickUpStoreCode,
          sellerId: value.sellerId,
        };
        productListMatrix.push(products);
      } else {
        const products = {
          sku: value.sku,
          offerId: value.offerId,
          quantity: value.quantity,
          deliveryMethods: value.deliveryMethods,
          pickUpStoreCode: value.pickUpStoreCode,
          sellerId: value.sellerId,
        };
        productListMirakl.push(products);
      }
    });

    if (productListMatrix.length === 0) {
      const prueba = await matrixClient();
      console.log(prueba.data);
      return prueba;
    } else {
      const prueba2 = await miraklClient();
      console.log(prueba2.data);
      return prueba2;
    }
  };
}
