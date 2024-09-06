const moment = require('moment');

class ProductDal {

    constructor(){}

    async fromDal( data ){

        const dal = data.map((itm, idx) => {

            return {
                productId: itm.ProductID,
                name: itm.ProductName,
                price: itm.Price,
                desc: itm.Description,
                gender: itm.GenderName,
                material: itm.MaterialName,
                subCategory: itm.SubcategoryName,
                category: itm.CategoryName,
                imageUrl: itm.ImageUrl,
                colorCodes: itm.ColorCodes.split(','),
                colorNames: itm.ColorNames.split(',')
            }
        })

        return dal
    }

};

const initDal = () => {
    return new ProductDal();
}

const productDal = initDal();

module.exports = productDal;