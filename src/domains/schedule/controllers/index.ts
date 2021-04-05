import scheduleServices from '../services'
import {Request, Response} from 'express';

export default class ScheduleController {
    static create = async (request: Request, response: Response) => response.json(scheduleServices.create(request));
}