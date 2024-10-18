const cookieSession = require('cookie-session');

require('dotenv').config();

function setUpCookieMiddleware(){

    return cookieSession(
        {
            name: process.env.COOKIE_NAME,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            keys: [ process.env.COOKIE_KEY ],
            httpOnly: true,
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'lax',
            secure: process.env.NODE_ENV === 'production',
        }
    );
};

module.exports = setUpCookieMiddleware;