const express = require('express');

const { httpGetProducts, httpGetProductById, httpCreateProduct } = require('../controller/products.controller');

const multerUpload = require('../../../middleware/multer/multer.middleware');

const productRouter = express.Router();

const resoure = '/products';

productRouter.get(`${resoure}`, httpGetProducts);

productRouter.get(`${resoure}/:id`, httpGetProductById);

productRouter.post(`${resoure}`, multerUpload, httpCreateProduct);

module.exports = productRouter;