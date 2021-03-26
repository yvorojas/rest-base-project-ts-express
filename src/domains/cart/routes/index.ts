import {Router} from 'express';
import CartController from '../controllers';

const router = Router()

router.get('/', CartController.getInfo)
router.get('/another', CartController.getAnotherInfo)

export default router