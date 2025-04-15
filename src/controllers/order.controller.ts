import { Request, Response } from 'express';
import * as orderService from '../services/order.service';
import { createOrderSchema } from '../schemas/order.schema';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const validatedData = createOrderSchema.parse(req.body);
    const order = await orderService.createOrder(validatedData);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};