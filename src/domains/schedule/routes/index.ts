import {Router} from 'express';
import ScheduleController from '../controllers';

const router = Router();

router.post('/create', ScheduleController.create)

export default router