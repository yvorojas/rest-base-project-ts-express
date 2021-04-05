import { Router } from 'express';
import openApiRoute from './openApi';
import userRoute from '../../domains/user/routes';
import cartRoute from '../../domains/cart/routes';
import scheduleRoute from '../../domains/schedule/routes';

const router = Router();
router.use('/api/v1/user', userRoute);
router.use('/api/v1/cart', cartRoute);
router.use('/api/v1/schedule', scheduleRoute);
router.use(openApiRoute);

export default router;
