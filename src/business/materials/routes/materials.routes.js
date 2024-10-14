const express = require('express');

const { httpGetMaterials } = require('../controller/materials.controller');

const materialsRouter = express.Router();

const resource = '/materials';

materialsRouter.get(`${resource}`, httpGetMaterials);

module.exports = materialsRouter;
