const moment = require('moment');

class CartDal {

    constructor(){}

    async fromDto( data ){

        const dal = this.reduceCart(data);

        const d = dal.map((itm, idx) => {

            return {
                id: itm.ProductID,
                sessionId: itm.SessionID,
                userID: itm.UserID,
                isActive: itm.IsActive = 0 ? false : true,
                cartExpiration: moment.utc(itm.ExpiresAt).format('MM/DD/YYYY'),
                colorId: itm.ColorID,
                colorName: itm.colorName,
                sizeId: itm.SizeID,
                sizeName: itm.SizeName,
                productName: itm.ProductName,
                productId: itm.ProductID,
                price: itm.Price,
                qty: itm.qty,
                total: itm.total
            }
        })

        return d;
    };

    reduceCart(data){

        const dal = [];

        const memo = new Map();

        for(const obj of data){

            if(!memo.has(obj.ProductID)){

                const newObj = { ...obj, qty: 1, total: obj.Price * 1 };

                memo.set(obj.ProductID, newObj);

                dal.push(newObj);
            }
            else {

                const recordFound = memo.get(obj.ProductID);

                recordFound.qty += 1;

                recordFound.total = recordFound.Price * recordFound.qty;
            }

        };
    
        return dal;
    }
};

const initCartDal = () => {
    return new CartDal();
};

module.exports = initCartDal;