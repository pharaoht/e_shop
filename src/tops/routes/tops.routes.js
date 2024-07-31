const express = require('express');

const { httpGetAllTops } = require('../controller/tops.controller');

const topsRouter = express.Router();

const resoure = '/tops';

topsRouter.get(`${resoure}`, httpGetAllTops);

module.exports = topsRouter;