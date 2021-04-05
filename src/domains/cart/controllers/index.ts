import cartServices from '../services';
import { Request, Response } from 'express';

export default class CartController {
  static getInfo = (request: Request, response: Response) =>
    response.json(cartServices.getInfo());
  static getAnotherInfo = (request: Request, response: Response) =>
    response.json(cartServices.getAnotherInfo());
}
