const express = require('express');

const cartRouter = express.Router();

const { httpAddtoCart, httpGetCart } = require('../controller/cart.controller');

const resource = '/cart';

cartRouter.get(`${resource}`, httpGetCart);

cartRouter.post(`${resource}/add`, httpAddtoCart);

module.exports = cartRouter;