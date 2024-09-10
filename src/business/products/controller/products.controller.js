const productDal = require("../dal/products.dal");
const initProducts = require("../repository/products.repository");
const redisInstance = require('../../../services/cache/redis.cache');

async function httpGetProducts(req, res){

    try {

        const { genderId, subCategoryId, materialId, categoryId } = req.query;

        const params = {
            genderId,
            subCategoryId,
            materialId,
            categoryId,
        };

        // if(redisInstance.isConnected){

        //     const cacheKey = redisInstance.cacheKeys.PRODUCTS;

        //     const generated = await redisInstance.generateCacheKey(cacheKey, params);

        //     const cache = await redisInstance.get(generated);

        //     if(cache !== null) return res.status(200).json(cache);
        // }

        const productsRepo = initProducts();

        const result = await productsRepo.repoGetAllProducts(params);

        const dal = await productDal.fromDal(result);

        if(redisInstance.isConnected){

            const cacheKey = redisInstance.cacheKeys.PRODUCTS;

            const key = await redisInstance.generateCacheKey(cacheKey, params);

            await redisInstance.set(key, dal);
        };


        return res.status(200).json(dal);

    }
    catch(error){

        console.error(error);

        return res.status(400).json({'error': error});  
    }
}

async function httpGetProductById(req, res){

    try {

        const { id } = req.params;

        if(!id) throw new Error('No ProductID');

        const productsRepo = initProducts();

        const result = await productsRepo.repoGetProductById(id);

        const [ dal ] = await productDal.fromDal(result);

        return res.status(200).json(dal);

    }
    catch(error){

        console.error(error);

        return res.status(400).json({'error': error});  
    }
}

async function httpCreateProduct(req, res){

}

module.exports = {
    httpGetProducts,
    httpGetProductById
}