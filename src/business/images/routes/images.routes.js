const express = require('express');

const { httpGetImagesById } = require('../controller/images.controller');

const resource = '/images';

const imagesRouter = express.Router();

imagesRouter.get(`${resource}/:id`, httpGetImagesById);

module.exports = imagesRouter;