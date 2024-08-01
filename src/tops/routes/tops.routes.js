const express = require('express');

const { httpGetTops } = require('../controller/tops.controller');

const topsRouter = express.Router();

const resoure = '/tops';

topsRouter.get(`${resoure}`, httpGetTops);

module.exports = topsRouter;