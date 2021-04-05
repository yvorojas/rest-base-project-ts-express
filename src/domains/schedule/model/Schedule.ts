import { Document, Model, model, Schema } from "mongoose";

export interface ISchedule extends Document {
    products: any[];
    region: string;
    country: string;
    localityCode: string;
  }
  
  const productSchema: Schema = new Schema({
    sku: {
        type: String,
        required: true
    },
    offerId: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true
    },
    deliveryMethods: {
        type: Array
    },
    pickupStoreCode: {
        type: String
    },
    sellerId: {
        type: String
    }
  });

  const scheduleSchema: Schema = new Schema({
    products: {
      type: [productSchema],
      required: true
    },
    region: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    localityCode: {
      type: String,
      required: true
    }
  });
  
  const Schedule: Model<ISchedule> = model("Schedule", scheduleSchema);
  
  
  export default Schedule;