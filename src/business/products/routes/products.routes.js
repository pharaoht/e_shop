const express = require('express');

const { httpGetProducts, httpGetProductById } = require('../controller/products.controller');

const productRouter = express.Router();

const resoure = '/products';

productRouter.get(`${resoure}`, httpGetProducts);

productRouter.get(`${resoure}/:id`, httpGetProductById);

module.exports = productRouter;