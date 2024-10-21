async function setGuestSession(req, res, next){

    if(!req.session.guestId){

        req.session.guestId = 'guest_' + Date.now();
    }

    next();
};

module.exports = setGuestSession;