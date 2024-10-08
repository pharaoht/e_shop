const db = require("../../../database/db.connection");

class MaterialsRepository {

    constructor(){

    }


    async repoGetMaterials(){

        const query = `
            SELECT *
            FROM Materials
        `;


        const [ result ] = await db.execute(query);

        return result;
    }
};


const initMaterialsRepository = () => {
    return new MaterialsRepository();
};

module.exports = initMaterialsRepository;