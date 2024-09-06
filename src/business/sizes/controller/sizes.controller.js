const redisInstance = require('../../../services/cache/redis.cache');
const initSizeRepository = require('../repository/sizes.repository');

async function httpGetAllSizes(req, res){

    try {

        const sizeRepository = initSizeRepository();

        const result = sizeRepository.repoGetAllSizes();

        return res.status(200).json(result);

    }
    catch(error){

        console.error(error);

        return res.status(400).json({'error': error});  
    
    }

};


module.exports = {
    httpGetAllSizes
}