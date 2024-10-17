const cookieSession = require('cookie-session');

require('dotenv').config();

function setUpCookieMiddleware(){
    
    return cookieSession(
        {
            name: process.env.COOKIE_NAME,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            keys: [ 'guestSession' ],
            httpOnly: true,
        }
    );
};

module.exports = setUpCookieMiddleware;