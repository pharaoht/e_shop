const cookieSession = require('cookie-session');

require('dotenv').config();

function setUpCookieMiddleware(){
    
    console.log(process.env.NODE_ENV === 'production')

    return cookieSession(
        {
            name: process.env.COOKIE_NAME,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            keys: [ process.env.COOKIE_KEY ],
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
            domain: process.env.NODE_ENV === 'production' ? 'https://e-comm-green.vercel.app': 'localhost'
        }
    );
};

module.exports = setUpCookieMiddleware;