import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce API',
      version: '1.0.0',
      description: 'API for managing products and orders',
    },
    servers: [{ url: 'http://localhost:3000' }],
    components: {
      schemas: {
        Product: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Laptop' },
            description: { type: 'string', example: 'High-performance laptop' },
            price: { type: 'number', example: 999.99 },
          },
        },
        Order: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            product_id: { type: 'integer', example: 1 },
            quantity: { type: 'integer', example: 2 },
            total_price: { type: 'number', example: 1999.98 },
            created_at: { type: 'string', format: 'date-time' },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

export default swaggerJSDoc(options);