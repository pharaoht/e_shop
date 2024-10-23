const moment = require('moment');

class CartDal {

    constructor(){}

    async fromDto( data, cn ){

        const d = await Promise.all(data.map(async (itm, idx) => {

            return {
                id: itm.ProductID,
                sessionId: itm.SessionID,
                userID: itm.UserID,
                isActive: itm.IsActive = 0 ? false : true,
                cartExpiration: moment.utc(itm.ExpiresAt).format('MM/DD/YYYY'),
                colorId: itm.ColorID,
                colorName: itm.ColorName,
                sizeId: itm.SizeID,
                sizeName: itm.SizeName,
                productName: itm.ProductName,
                productId: itm.ProductID,
                price: cn ? await this.convertPrice(cn, Number(itm.Price)) : `$${itm.Price}`,
                qty: itm.qty,
                imageUrl: itm.ImageURL,
                totalItems: itm.totalItems,
                subTotal: cn ? await this.convertPrice(cn, Number(itm.subTotal)) : `$${itm.subTotal}`,
                total: cn ? await this.convertPrice(cn, Number(itm.grandTotal)) : `$${itm.grandTotal}`,
            }
        }))

        return d;
    };

};

const initCartDal = () => {
    return new CartDal();
};

module.exports = initCartDal;