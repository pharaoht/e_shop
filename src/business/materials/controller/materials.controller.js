const redisClient = require('../../../services/cache/redis.cache');
const initMaterialsDal = require('../dal/materials.dal');
const initMaterialsRepository = require('../repository/materials.repository');

async function httpGetMaterials(req, res) {
    
    try{

        if(redisClient.isConnected){

            const materialCacheKey = redisClient.cacheKeys.MATERIALS;

            const cache = await redisClient.get(materialCacheKey);

            if(cache){

                return res.status(200).json(cache);
            }
        }

        const materialsRepo = initMaterialsRepository();
    
        const materialsDal = initMaterialsDal();

        const result = await materialsRepo.repoGetMaterials();

        const dal = await materialsDal.fromDal(result);

        if(redisClient.isConnected){

            await redisClient.set(redisClient.cacheKeys.MATERIALS, dal);
        }

        return res.status(200).json(dal)

    }
    catch(error){

        console.error(error);

        return res.status(400).json(error);
    }
};


module.exports = {
    httpGetMaterials
}