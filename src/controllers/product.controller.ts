import { Request, Response } from 'express';
import * as productService from '../services/product.service';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: "Name and price are required" });
    }
    const product = await productService.createProduct({ name, description, price });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { name, description, price } = req.body;
    const product = await productService.updateProduct(id, { name, description, price });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await productService.deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};