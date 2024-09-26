const passport = require('passport');

async function httpOAuthLogin(req, res, next){

    const referrer = req.headers.referer || '/';

    req.session.referrer = referrer;

    passport.authenticate('google', 
        {
            scope: ['email','profile'],
        }
    )(req, res, next);
};

async function httpOAuthCallback(req, res, next) {

    passport.authenticate('google', {

        failureRedirect: '/api/auth/failure',
        successRedirect: `/api/users/new/`,
        session: true,

    })(req, res, next);
}

async function httpLogout(req, res){

    req.logout();

    res.clearCookie('token');

    res.clearCookie('userSession')

    return res.redirect('/')
}

async function httpOAuthFailure(req, res){
    
    return res.json({'error': 'Something went wrong'})
}

module.exports = {
    httpOAuthLogin,
    httpOAuthCallback,
    httpLogout,
    httpOAuthFailure
}