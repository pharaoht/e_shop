const initImageDal = require("../dal/images.dal");
const initImageRepository = require("../repository/images.repository");

async function httpGetImagesById(req, res) {
    
    try {

        const { id } = req.params;

        if(!id) throw new Error('No Product Id')

        const imageRepo = initImageRepository();

        const imageDal = initImageDal();

        const result = await imageRepo.repoGetImagesById(id);

        const dal = await imageDal.fromDal(result);

        return res.status(200).json(dal);

    } catch (error) {

        console.error(error);

        return res.status(400).json({'error': error});  
    }
};


module.exports = {
    httpGetImagesById,
}