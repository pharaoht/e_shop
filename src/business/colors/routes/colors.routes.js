const express = require('express');

const { httpGetColorsByProductId } = require('../controller/colors.controller');

const colorsRouter = express.Router();

const resource = '/colors';

colorsRouter.get(`${resource}/:productId`, httpGetColorsByProductId);

module.exports = colorsRouter;

