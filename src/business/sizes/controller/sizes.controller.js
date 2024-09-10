const redisInstance = require('../../../services/cache/redis.cache');
const initSizeDal = require('../dal/sizes.dal');
const initSizeRepository = require('../repository/sizes.repository');

async function httpGetAllSizes(req, res){

    try {

        const sizeRepository = initSizeRepository();

        const sizeDal = initSizeDal();

        const result = await sizeRepository.repoGetAllSizes();

        const dal = await sizeDal.fromDal(result);

        return res.status(200).json(dal);

    }
    catch(error){

        console.error(error);

        return res.status(400).json({'error': error});  
    
    }

};


module.exports = {
    httpGetAllSizes
}