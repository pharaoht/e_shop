class SizeDal {
    constructor(){}

    fromDal(data ){

        const dal = data.map((itm) => {

            return {
                sizeId: itm.SizeID,
                sizeName: itm.SizeName.replace('_', ' '),
                sizeAbr: !itm.SizeName.includes('_') ? itm.SizeName.charAt(0) : itm.SizeName.charAt(0) + itm.SizeName.charAt(2)
            }
        });

        return dal
    }
}

const initSizeDal = () => {
    return new SizeDal();
}

module.exports = initSizeDal;