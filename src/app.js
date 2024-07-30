const express = require('express');

const pool = require('./database/db.connection');

const path = require('path');

const cors = require('cors');

const app = express();

app.use(cors({ origin: [ 'http://localhost:3000' ], credentials: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const apiRouter = express.Router();

app.use('/api', apiRouter);

app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'default.html'))
});

module.exports = app;