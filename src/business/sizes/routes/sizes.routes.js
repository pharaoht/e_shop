const express = require('express');

const { httpGetAllSizes } = require('../controller/sizes.controller');

const sizesRouter = express.Router();

const resource = '/sizes';

sizesRouter.get(`${resource}`, httpGetAllSizes);
