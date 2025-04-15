import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  price: z.number({
    invalid_type_error: 'Price must be a number',
  }).positive('Price must be positive'), 
});

export type CreateProductDto = z.infer<typeof createProductSchema>;
