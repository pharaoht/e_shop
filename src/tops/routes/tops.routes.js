const express = require('express');

const { httpGetFilterTops, httpGetTopSizes, httpGetTopMaterials, httpGetTopCategories, httpGetTopById } = require('../controller/tops.controller');

const topsRouter = express.Router();

const resoure = '/tops';

topsRouter.get(`${resoure}`, httpGetFilterTops);

topsRouter.get(`${resoure}/sizes`, httpGetTopSizes);

topsRouter.get(`${resoure}/materials`, httpGetTopMaterials);

topsRouter.get(`${resoure}/categories`, httpGetTopCategories);

topsRouter.get(`${resoure}/:id`, httpGetTopById);

module.exports = topsRouter;