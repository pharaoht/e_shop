const db = require('../../../database/db.connection');

class ImageRepository {

    constructor(){
        this._tableName = 'Images';
    };

    async repoGetImagesById(id){

        const query = `
            SELECT *
            FROM ${this._tableName}
            WHERE ProductID = ?
        `;

        const [ data ] = await db.execute(query, [id]);

        return data
    }

    async repoCreateImage(productId, imageUrl){

        const query = `
            INSERT INTO ${this._tableName} (ProductID, ImageURL)
            VALUES (?,?)
        `;

        const [ result ] = await db.execute(query, [productId, imageUrl]);

        return result;
    }
};

const initImageRepository = () => {
    return new ImageRepository;
}

module.exports = initImageRepository;