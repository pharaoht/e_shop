async function locationMiddleware(req, res, next){

    if(req.session.guestId && !req.session.cc){

        const ip = req.socket.remoteAddress;

       
    }

    next()

}

module.exports = locationMiddleware