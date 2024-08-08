const db = require('../../database/db.connection');

class TopsRepository {

    constructor(){
        //table names
        this._tablename = 'tops';

        //fk tables
        this._topMaterialTblName = 'top_materials';
        this._topSizesTblName = 'top_sizes';
        this._topCategoriesTblName = 'top_categories';
        this._topImagesTblName = 'top_images';
        this._topColorsTblName = 'top_colors';
        this._topGenderTblName = 'top_gender';

        //join tables
        this._topImagesJoinTbleName = 'top_images_join_table';
        this._topColorsJoinTbleName = 'top_colors_join_table';
        this._topSizesJoinTbleName = 'top_sizes_join_table';

        //joins
        this.top_material_join = `INNER JOIN ${this._topMaterialTblName} ON top_material_id = ${this._topMaterialTblName}.id`;
        this.top_sizes_join = `INNER JOIN ${this._topSizesTblName} ON size_id = ${this._topSizesTblName}.id`;
        this.top_categories_join = `INNER JOIN ${this._topCategoriesTblName} ON top_category_id = ${this._topCategoriesTblName}.id`;
        this.top_images_join = `INNER JOIN ${this._topImagesTblName} ON photo_id = ${this._topImagesTblName}.id`;
        this.top_colors_join = `INNER JOIN ${this._topColorsTblName} ON color_id = ${this._topColorsTblName}.id`;
        this.top_gender_join = `INNER JOIN ${this._topGenderTblName} ON gender_id = ${this._topGenderTblName}.id`;
    }

    async repoCreateTop(){

        const queryOne = ``;
    }

    async repoGetTops( whereCondition, limit, offset ){

        const query = `
            SELECT *
            FROM ${this._tablename}
            INNER JOIN 
            LIMIT = ?
            OFFSET = ?
        `;

        const data = await db.execute(query, [limit, offset]);

        return data[0]
    
    };

    async repoGetTopSizes(){

        const query = `
            SELECT *
            FROM ${this._topSizesTblName}
        `

        const result = await db.execute(query);

        return result[0]
    };

    async repoGetTopMaterials(){
    
        const query = `
            SELECT *
            FROM ${this._topMaterialTblName}
        `;

        const result = await db.execute(query);

        return result[0]
    };

    async repoGetTopCategories(){
    
        const query = `
            SELECT *
            FROM ${this._topCategoriesTblName}
        `;

        const result = await db.execute(query);

        return result[0]
    };

    async repoGetTopColors(){

        const query = `
            SELECT *
            FROM ${this._topColorsJoinTbleName}
        `;

        const result = await db.execute(query);

        return result[0]
    };
}

//factory pattern
const initRepo = () => {
    return new TopsRepository()
};

const topsRepository = initRepo();

module.exports = topsRepository;