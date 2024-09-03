const initProducts = require("../repository/products.repository");

async function httpGetProducts(req, res){

    try {

        const { genderId, subCategoryId, materialId, categoryId } = req.query;

        const params = {
            genderId,
            subCategoryId,
            materialId,
            categoryId,
        };

        const productsRepo = initProducts();

        const result = await productsRepo.repoGetAllProducts(params);

        return res.status(200).json(result);

    }
    catch(error){

        console.error(error);

        return res.status(400).json({'error': error});  
    }
}

async function httpGetOneProduct(req, res){

    try {

    }
    catch(error){

    }
}

async function httpCreateProduct(req, res){

}

module.exports = {
    httpGetProducts,
    httpGetOneProduct
}