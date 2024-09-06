const cookieSession = require('cookie-session');

require('dotenv').config();

function setUpCookieMiddleware(){
    
    return cookieSession(
        {
            name: process.env.COOKIE_NAME,
            maxAge: 24 * 60 * 60 * 1000,
            keys: [ 'test' ]
        }
    );
};

module.exports = setUpCookieMiddleware;