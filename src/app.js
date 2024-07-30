const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors({ origin: [ 'http://localhost:3000' ], credentials: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const apiRouter = express.Router();

app.use('/api', apiRouter);

module.exports = app;