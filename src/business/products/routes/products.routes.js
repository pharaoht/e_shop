const express = require('express');

const { httpGetProducts } = require('../controller/products.controller');

const productRouter = express.Router();

const resoure = '/products';

productRouter.get(`${resoure}`, httpGetProducts);

module.exports = productRouter;