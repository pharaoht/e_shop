const redisInstance = require('../../services/cache/redis.cache');
const topsRepository = require('../repository/tops.repository');
const topDal = require('../dal/tops.dal');

async function httpGetTopSizes(req, res){
  
    try{

        if(redisInstance.isConnected){

            const cacheKey = redisInstance.cacheKeys.TOP_SIZES;

            const cache = await redisInstance.get(cacheKey);
            
            if(cache !== null){

                return res.status(200).json(cache);
            } 
        }

        const result = await topsRepository.repoGetTopSizes();

        const dal = await topDal.fromDal(result);

        if(redisInstance.isConnected) {

            const cacheKey = redisInstance.cacheKeys.TOP_SIZES;

            await redisInstance.set(cacheKey, dal);
        }
        
        return res.status(200).json(dal);

    }
    catch(error){

        console.error(error);

        return res.status(400).json({'error': error});  
    }
};

async function httpGetTopMaterials(req, res){

    try{

        if(redisInstance.isConnected){

            const cacheKey = redisInstance.cacheKeys.TOP_MATERIALS;
    
            const cache = await redisInstance.get(cacheKey);

            if(cache !== null) return res.status(200).json(cache);
        }

        const result = await topsRepository.repoGetTopMaterials();

        const dal = await topDal.fromDal(result);

        if(redisInstance.isConnected){

            const cacheKey = redisInstance.cacheKeys.TOP_MATERIALS;

            await redisInstance.set(cacheKey, dal);
        }

        return res.status(200).json(dal);

    }
    catch(error){

        console.error(error);

        return res.status(400).json({'error': error});  
    }
};

async function httpGetTopCategories(req, res){
   
    try{

        if(redisInstance.isConnected){

            const cacheKey = redisInstance.cacheKeys.TOP_CATEGORIES;

            const cache = await redisInstance.get(cacheKey);

            if(cache !== null) return res.status(200).json(cache);

        };

        const result = await topsRepository.repoGetTopCategories();

        const dal = await topDal.fromDal(result);

        if(redisInstance.isConnected){

            const cacheKey = redisInstance.cacheKeys.TOP_CATEGORIES;

            await redisInstance.set(cacheKey, dal);
        };

        return res.status(200).json(dal);

    }
    catch(error){
    
        console.error(error);

        return res.status(400).json({'error': error});  
    }
};

async function httpGetFilterTops(req, res){

};

async function httpGetTopById(req, res){

};

module.exports = {
    httpGetTopSizes,
    httpGetTopMaterials,
    httpGetTopCategories,
    httpGetFilterTops,
    httpGetTopById
};