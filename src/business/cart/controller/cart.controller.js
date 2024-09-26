const initCartRepo = require("../repository/cart.repository");

async function httpAddtoCart(req, res){

    const test = {
        colorId:1,
        sizeId:1,
        productId: 1,
    }
    
    try{

        //color, size, productId, price,
        const body = req.body;

        const sessionId = req.session.guestId;

        const cartRepository = initCartRepo();

        const isExist = await cartRepository.repoCheckIfCartExist(sessionId, '');

        if(!isExist){

            const newCartId = await cartRepository.repoCreateNewCart(sessionId, null);

            //body and parentCart id
            const result = await cartRepository.repoAddToCart(newCartId, test.productId, test.colorId, test.sizeId);
   
        }
        else{

            const result = await cartRepository.repoAddToCart(isExist.ID, test.productId, test.price);

            
        }

        //if cart was found add to cart
        const newCart = await cartRepository.repoGetCartBySessionId(sessionId);

        return res.status(200).json(newCart);

        //get cart and return to client
    }
    catch(error){

        console.error(error);

        return res.status(400).json(error);
    }
};

async function httpGetCart(req, res){
    
    try{

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