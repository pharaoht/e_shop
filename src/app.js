const path = require('path');

const express = require('express');
//init db
const pool = require('./database/db.connection');
//init redis cluster
const redis = require('./services/cache/redis.cache');

const cors = require('cors');

const cookieMiddleware = require('./middleware/cookies/cookies.middleware');

const guestSessionMiddleware = require('./middleware/cookies/guest.middleware');

const app = express();

const apiRouter = express.Router();

const categoryRouter = require('./business/categories/routes/categories.routes');

const productsRouter = require('./business/products/routes/products.routes');

const imagesRouter = require('./business/images/routes/images.routes');

const sizesRouter = require('./business/sizes/routes/sizes.routes');

const colorsRouter = require('./business/colors/routes/colors.routes');

const cartRouter = require('./business/cart/routes/cart.routes');

app.use(cookieMiddleware());

app.use(cors({ origin: [ 'http://localhost:3000', 'https://e-comm-green.vercel.app' ], credentials: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(guestSessionMiddleware);

app.use('/api', apiRouter);

apiRouter.use(categoryRouter);

apiRouter.use(productsRouter);

apiRouter.use(imagesRouter);

apiRouter.use(sizesRouter);

apiRouter.use(colorsRouter);

apiRouter.use(cartRouter);

app.get('/' , (req, res) => {

    res.sendFile(path.join(__dirname, 'templates', 'default.html'))
});

module.exports = app;