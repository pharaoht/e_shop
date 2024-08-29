const path = require('path');

const express = require('express');
//init db
const pool = require('./database/db.connection');
//init redis cluster
const redis = require('./services/cache/redis.cache');

const cors = require('cors');

const app = express();

const apiRouter = express.Router();

const categoryRouter = require('./business/categories/routes/categories.routes');

app.use(cors({ origin: [ 'http://localhost:3000', 'https://e-comm-green.vercel.app' ], credentials: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

apiRouter.use(categoryRouter);

app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'default.html'))
});

module.exports = app;