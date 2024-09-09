const db = require('../../../database/db.connection');

class SizeRepository {

    constructor(){  
        this._tableName = 'Sizes';
    };

    async repoGetAllSizes(){

        const query = `
            SELECT 
                SizeID,
                SizeName
            FROM ${this._tableName}
        `;

        const [ data ]  = await db.execute(query)

        return data;
    }

}

const initSizeRepository = () => {
    return new SizeRepository();
}

module.exports = initSizeRepository;