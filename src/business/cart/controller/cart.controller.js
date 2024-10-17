const initCartDal = require("../dal/cart.dal");
const initCartRepo = require("../repository/cart.repository");

async function httpAddtoCart(req, res){
    
    try{

        //color, size, productId, price,
        const body = req.body;

        const sessionId = req.session.guestId;

        const cartRepository = initCartRepo();

        const cartDal = initCartDal();

        const isExist = await cartRepository.repoCheckIfCartExist(sessionId, '');

        if(!isExist){

            const newCartId = await cartRepository.repoCreateNewCart(sessionId, null);

            //body and parentCart id
            await cartRepository.repoAddToCart(newCartId.insertId, body.productId, body.colorId, body.sizeId);
   
        }
        else{

            await cartRepository.repoAddToCart(isExist.ID, body.productId, body.colorId, body.sizeId);
            
        }

        //if cart was found add to cart
        const result = await cartRepository.repoGetCartBySessionId(sessionId);

        const dal = await cartDal.fromDto(result);

        return res.status(200).json(dal);

    }
    catch(error){

        console.error(error);

        return res.status(400).json(error);
    }
};

async function httpGetCart(req, res){

    try{

        const sessionId = req.session.guestId;

        const userId = req.session.userId;
        console.log(sessionId, 'getCart')
        const cartDal = initCartDal();

        const cartRepository = initCartRepo();

        const result = await cartRepository.repoGetCartBySessionId(sessionId);

        const dal = await cartDal.fromDto(result);

        console.log(dal);
        return res.status(200).json(dal);
    }
    catch(error){

        console.error(error);

        return res.status(400).json(error);
    }
}


module.exports = {
    httpAddtoCart,
    httpGetCart,
}