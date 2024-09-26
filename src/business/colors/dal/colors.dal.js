class ColorsDataAccessLayer {

    constructor(){};

    async fromDal( data ){
 
        const dal = data.map((itm) => {
            return {
                id: itm.ProductColorID,
                productId: itm.ProductID,
                colorId: itm.ColorID,
                colorName: itm.ColorName,
                colorCode: itm.ColorCode
            }
        });

        return dal;
    }
};

const initColorsDal = () => {

    return new ColorsDataAccessLayer();
};

module.exports = initColorsDal;