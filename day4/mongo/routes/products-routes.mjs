import express from "express";
import { getProductsItems } from "../controller/products-controller.mjs";

export const productRouter = express.Router();

productRouter.get('/', getProductsItems);

// productRouter.get('/:id', (req, res) => {
//     const products = [{name: 'test1', price: 24.00}, {name: 'test2', price: 234.00}, {name: 'test3', price: 30.00}, {name: 'test4', price: 324.00}];
//     res.status(200).render('products', {productsItems: products});
// });

productRouter.post();