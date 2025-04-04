const moment = require('moment');
const calculations = require('../../calculations/calulations');

class CartDal {

    constructor(){}

    async fromDto( data, cn ){

        const d = await Promise.all(data.map(async (itm, idx) => {

            console.log(itm.grandTotal + calculations.deliveryFee())

            const delTotal = +itm.grandTotal + calculations.deliveryFee();


            return {
                id: idx,
                cartId: itm.ID,
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
                deliveryFee: `$${calculations.deliveryFee()}`,
                orderValue: `$${itm.grandTotal}`,
                subTotal: cn ? await this.convertPrice(cn, Number(itm.subTotal)) : `$${itm.subTotal}`,
                total: cn ? await this.convertPrice(cn, Number(delTotal.toFixed(2))) : `$${delTotal.toFixed(2)}`,
            }
        }))

        return d;
    };

};

const initCartDal = () => {
    return new CartDal();
};

module.exports = initCartDal;