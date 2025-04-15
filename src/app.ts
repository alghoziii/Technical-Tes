import express from 'express';
import productRoutes from './routes/product.routes';
import orderRoutes from './routes/order.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './utils/swagger';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API docs: http://localhost:${PORT}/api-docs`);
});

export default app;
