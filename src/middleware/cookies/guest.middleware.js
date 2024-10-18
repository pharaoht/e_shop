async function setGuestSession(req, res, next){
    console.log(req.session, 'hiiiii')
    if(!req.session.guestId){

        req.session.guestId = 'guest_' + Date.now();
    }

    next();
};

module.exports = setGuestSession;