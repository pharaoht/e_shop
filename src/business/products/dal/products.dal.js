const moment = require('moment');
const CurrencyConversion = require('../../../services/currency/conversion.currency');

class ProductDal extends CurrencyConversion {

    constructor(){
        super()
    }

    async fromDal( data, cn ){

        const dal = await Promise.all(data.map(async (itm, idx) => {

            return {
                productId: itm.ProductID,
                name: itm.ProductName,
                price: cn ? await this.convertPrice(cn, Number(itm.Price)) : `$${itm.Price}`,
                desc: itm.Description,
                gender: itm.GenderName,
                material: itm.MaterialName,
                subCategory: itm.SubcategoryName,
                category: itm.CategoryName,
                imageUrl: itm.ImageUrl,
                colorCodes: itm.ColorCodes.split(','),
                colorNames: itm.ColorNames.split(',')
            }
        }))

        return dal
    }

};

const initDal = () => {
    return new ProductDal();
}

const productDal = initDal();

module.exports = productDal;