const express = require('express');

const cartRouter = express.Router();

const { httpAddtoCart, httpGetCart, httpDeleteCartItem } = require('../controller/cart.controller');

const resource = '/cart';

cartRouter.get(`${resource}`, httpGetCart);

cartRouter.post(`${resource}/add`, httpAddtoCart);

cartRouter.delete(`${resource}`, httpDeleteCartItem);

module.exports = cartRouter;