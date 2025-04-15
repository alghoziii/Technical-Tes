import { db } from '../config/db';
import { products } from '../models/schema';
import { eq } from 'drizzle-orm';

export const createProduct = async (product: { name: string; description?: string; price: number }) => {
  const [newProduct] = await db.insert(products).values(product).returning();
  return newProduct;
};

export const getProducts = async () => {
  return await db.select().from(products);
};

export const updateProduct = async (id: number, product: Partial<{ name: string; description?: string; price: number }>) => {
  const [updatedProduct] = await db.update(products).set(product).where(eq(products.id, id)).returning();
  return updatedProduct;
};

export const deleteProduct = async (id: number) => {
  await db.delete(products).where(eq(products.id, id));
};