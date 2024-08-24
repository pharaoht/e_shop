const express = require('express');
const { httpGetCategories } = require('../controller/categories.controller');

const categoryRouter = express.Router();

const resoure = '/categories';

categoryRouter.get(`${resoure}`, httpGetCategories);

module.exports = categoryRouter;