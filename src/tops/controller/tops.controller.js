const redisInstance = require('../../services/cache/redis.cache');
const topsRepository = require('../repository/tops.repository');
const topDal = require('../dal/tops.dal');

async function httpGetTops(req, res){

    try {
        redisInstance.clearAllCluster();
        return res.status(200).json('hi')
        // const { size, category, gender, materials, color, limit, offset } = req.query;

        // const query = [
        //     { size: size },
        //     { category: category },
        //     { gender: gender },
        //     { materials: materials },
        //     { color: color },
        // ];

        // const { queryString, params } = await topDal.repoQueryString(query, limit, offset);

        // const result = await topsRepository.repoGetTops(queryString, params);

    }
    catch(error){

    }
};

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
    console.time('mytimer')
    try{

        if(redisInstance.isConnected){

            const cacheKey = redisInstance.cacheKeys.TOP_CATEGORIES;

            const cache = await redisInstance.get(cacheKey);
            console.timeEnd('mytimer')
            if(cache !== null) return res.status(200).json(cache);

        };

        const result = await topsRepository.repoGetTopCategories();

        const dal = await topDal.fromDal(result);

        if(redisInstance.isConnected){

            const cacheKey = redisInstance.cacheKeys.TOP_CATEGORIES;

            await redisInstance.set(cacheKey, dal);
        };

                    console.timeEnd('mytimer')
        return res.status(200).json(dal);

    }
    catch(error){
    
        console.error(error);

        return res.status(400).json({'error': error});  
    }
};

module.exports = {
    httpGetTops,
    httpGetTopSizes,
    httpGetTopMaterials,
    httpGetTopCategories
}