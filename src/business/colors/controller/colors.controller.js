const initColorsDal = require("../dal/colors.dal");
const initColorsRepository = require("../repository/colors.repository");

async function httpGetColorsByProductId(req, res){

    try{

        const { productId } = req.params;

        if(!productId) throw new Error('No Product id was provided.');
        
        const colorsRepo = initColorsRepository();

        const colorsDal = initColorsDal();

        const result = await colorsRepo.repoGetColorsByProductId(productId);

        const dal = await colorsDal.fromDal(result);

        return res.status(200).json(dal);
    }
    catch(error){

        console.error(error);

        return res.status(400).json(error);
    }
};

async function httpGetColors(req, res) {
    
    try{

        const colorRepo = initColorsRepository();

        const colorDal = initColorsDal();

        const result = await colorRepo.repoGetColors();

        const dal = await colorDal.fromDal(result);

        return res.status(200).json(dal);

    }
    catch(error){

        console.error(error);

        return res.status(400).json(error);
    }
}

module.exports = {
    httpGetColorsByProductId,
    httpGetColors
}