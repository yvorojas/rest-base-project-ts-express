import CreateUseCase from '../../../../src/domains/schedule/services/create';
import { Request } from 'express';
import { mocked } from "ts-jest/utils";
import Schedule from '../../../../src/domains/schedule/model/Schedule';

const mockScheduleSchema = () => {
    save: jest.fn()
}

const mockRequest = {
    body: {
        "products": [{
            "sku": "12345",
            "offerId": "12345",
            "quantity": 2,
            "deliveryMethods": ["RT"],
            "pickUpStoreCode": "X",
            "sellerId": "1"
        },
        {
            "sku": "98765",
            "offerId": "98765",
            "quantity": 3,
            "deliveryMethods": ["DD"],
            "pickUpStoreCode": "X",
            "sellerId": "2"
        }],
        "region": "A",
        "country": "CL",
        "localityCode": "LD"
    },
} as Request;

jest.mock("../../../../src/domains/schedule/model/Schedule", () =>
  jest.fn().mockImplementation(() => ({ create: () => "OK" }))
);

describe('CreateUseCase', () => {
    const mockedUser = mocked(Schedule, true);
    it("should return user info when execute method is called", async () => {
        const userInfo = await CreateUseCase.execute(mockRequest);
        console.log(userInfo);
        expect(mockedUser).toHaveBeenCalledTimes(1);
        //expect(userInfo).toStrictEqual("OK");
    });
})