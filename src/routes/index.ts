import express from 'express';
import productRoutes from './product.routes';
import orderRoutes from './order.routes';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/orders', orderRoutes);

export default router;