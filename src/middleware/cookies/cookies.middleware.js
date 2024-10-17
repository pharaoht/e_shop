const cookieSession = require('cookie-session');

require('dotenv').config();

function setUpCookieMiddleware(){
    console.log(process.env.COOKIE_KEY)
    return cookieSession(
        {
            name: process.env.COOKIE_NAME,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            keys: [ process.env.COOKIE_KEY ],

        }
    );
};

module.exports = setUpCookieMiddleware;