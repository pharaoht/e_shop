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
};

const initImageRepo = () => {
    return new ImageRepository;
}

module.exports = initImageRepo;