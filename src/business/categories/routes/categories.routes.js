const express = require('express');

const { httpGetCategories, httpGetCategoriesByGenderId, httpGetSubCategoriesByCategoryId } = require('../controller/categories.controller');

const categoryRouter = express.Router();

const resoure = '/categories';

categoryRouter.get(`${resoure}`, httpGetCategories);

categoryRouter.get(`${resoure}/:genderId`, httpGetCategoriesByGenderId);

categoryRouter.get(`${resoure}/:genderId/:catId`, httpGetSubCategoriesByCategoryId);

module.exports = categoryRouter;