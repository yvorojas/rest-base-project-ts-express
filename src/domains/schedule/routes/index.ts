import { Router } from 'express';
import ScheduleController from '../controllers';

const router = Router();

router.post('/create', ScheduleController.create);
router.post('/orchestrator', ScheduleController.orchestator);

export default router;
