const express = require('express');

const { httpGetTops, httpGetTopSizes, httpGetTopMaterials, httpGetTopCategories } = require('../controller/tops.controller');

const topsRouter = express.Router();

const resoure = '/tops';

topsRouter.get(`${resoure}`, httpGetTops);

topsRouter.get(`${resoure}/sizes`, httpGetTopSizes);

topsRouter.get(`${resoure}/materials`, httpGetTopMaterials);

topsRouter.get(`${resoure}/categories`, httpGetTopCategories);

module.exports = topsRouter;