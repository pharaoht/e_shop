const productDal = require("../dal/products.dal");
const initProductsRepository = require("../repository/products.repository");
const redisInstance = require('../../../services/cache/redis.cache');
const initColorsRepository = require("../../colors/repository/colors.repository");

const initImageUploadService = require("../../../services/upload/upload.services");
const { deleteFileFromFs } = require("../../../util/util");
const initImageRepository = require("../../images/repository/images.repository");

async function httpGetProducts(req, res){

    try {

        const { genderId, subCategoryId, materialId, categoryId, sortBy, color, material } = req.query;
  
        const params = {
            genderId,
            subCategoryId,
            materialId,
            categoryId,
            sortBy,
            color,
            material
        };

        if(redisInstance.isConnected){

            const cacheKey = redisInstance.cacheKeys.PRODUCTS;

            const generated = await redisInstance.generateCacheKey(cacheKey, params);

            const cache = await redisInstance.get(generated);

            if(cache !== null) return res.status(200).json(cache);
        }

        const productsRepo = initProductsRepository();

        const result = await productsRepo.repoGetAllProducts(params, sortBy);

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

        const productsRepo = initProductsRepository();

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

    try {

        let filepaths = [];

        const fileUrls = [];

        const body = req.body;

        const productsRepo = initProductsRepository();

        const colorRepo = initColorsRepository();

        const imageRepo = initImageRepository()
        
        const result = await productsRepo.repoCreateProduct(
            body.productName,
            body.subCatId,
            body.materialId,
            body.genderId,
            body.price,
            body.desc,
            body.catId
        );

        for(const colorId of body.colorIds.split(',')){

            await colorRepo.repoCreateProductColor(
                result.insertId,
                colorId
            );
        };

        if (req.files) filepaths = req.files.map(file => file.path);

        if (filepaths.length > 0) {

            for (const filepath of filepaths) {

                const fileUrl = await uploadImageHelper(filepath);

                fileUrls.push(fileUrl);
            }
        };

        //images
        for(const url of fileUrls){
            await imageRepo.repoCreateImage(result.insertId, url)
        }

        if(filepaths.length > 0){
            for(const filepath of filepaths){
                deleteFileFromFs(filepath);
            }
        }

        if(redisInstance.isConnected){

            await redisInstance.clearAllCluster();
        }
        
        return res.status(200).json('success');
    } 
    catch (error) {

        console.error(error);

        return res.status(400).json({'error': error});
    }

};


async function uploadImageHelper(filepath){

    const folder = 'products';

    try{
        
        const uploadService = initImageUploadService();

        const url = await uploadService.uploadImage(filepath, folder);

        return `${folder}/${url.public_id.split('/')[1]}`;
    }
    catch(error){

        console.log(error, error.message);

        return false;
    }
}

module.exports = {
    httpGetProducts,
    httpGetProductById,
    httpCreateProduct
}