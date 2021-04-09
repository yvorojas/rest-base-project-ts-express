import { Router } from 'express';
import demoController from '../controllers';

const router = Router();

router.get('/', demoController.getInfo);
router.get('/another', demoController.getAnotherInfo);

export default router;
