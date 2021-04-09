import userServices from '../services';
import { Request, Response } from 'express';

export default class UserController {
  static getInfo = (request: Request, response: Response) =>
    response.json(userServices.getInfo());
}
