import { db } from '../config/db';
import { orders, products } from '../models/schema';
import { eq } from 'drizzle-orm';

export const createOrder = async (order: { product_id: number; quantity: number }) => {
  const [product] = await db.select().from(products).where(eq(products.id, order.product_id));
  if (!product) throw new Error('Product not found');

  const total_price = Number(product.price) * order.quantity;
  const [newOrder] = await db.insert(orders).values({ ...order, total_price }).returning();
  return newOrder;
};

export const getOrders = async () => {
  return await db.select().from(orders);
};