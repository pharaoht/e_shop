const redisInstance = require('../../../services/cache/redis.cache');
const categoryDal = require('../dal/categories.dal');
const categoryRepository = require('../repository/categories.repository');

async function httpGetCategories(req, res){

    try {

        const { genderId } = req.query;

        if(redisInstance.isConnected){

            const cacheKey = redisInstance.cacheKeys.CATEGORIES;
    
            const cache = await redisInstance.get(`${cacheKey}genderId${genderId}`);

            if(cache !== null) return res.status(200).json(cache);
        }

        const result = await categoryRepository.repoGetSubCategoriesWParent(genderId);

        const dal = await categoryDal.fromDal(result, true);

        if(redisInstance.isConnected){

            const cacheKey = redisInstance.cacheKeys.CATEGORIES;

            await redisInstance.set(`${cacheKey}genderId${genderId}`, dal);
        }

        return res.status(200).json(dal);
    }
    catch(error){

        console.error(error);

        return res.status(400).json({'error': error});  
    }
};

async function httpGetSubCategoriesByCategoryId(req, res){

    try {

        const genderId = req.params.genderId;

        const catId = req.params.catId;

        const result = await categoryRepository.repoGetSubCategoriesByCategoryId(catId, genderId);

        const dal = await categoryDal.fromDal(result, false);

        return res.status(200).json(dal)
    }
    catch(error){

        console.error(error);

        return res.status(400).json({'error': error});  
    }
}

async function httpGetCategoriesByGenderId(req, res){

    try {

        const genderId = req.params.genderId;

        const result = await categoryRepository.repoGetCategoriesByGenderId(genderId);

        const dal = await categoryDal.fromDal(result, false);

        return res.status(200).json(dal)
    }
    catch(error){

        console.error(error);

        return res.status(400).json({'error': error});  
    }
}

module.exports = {
    httpGetCategories,
    httpGetCategoriesByGenderId,
    httpGetSubCategoriesByCategoryId
};