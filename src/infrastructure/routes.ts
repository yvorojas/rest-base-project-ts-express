import {Router} from 'express'
import userRoute from '../domains/user/routes';
import cartRoute from '../domains/cart/routes';

const router = Router()
router.use('/api/v1/user', userRoute)
router.use('/api/v1/cart', cartRoute)

export default router