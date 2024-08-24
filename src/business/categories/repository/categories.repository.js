const db = require('../../../database/db.connection');

class CategoryRepository {

    constructor(){

        this._tableName = 'Categories';
        this._subTableName = 'Subcategories';
    }

    async repoGetAllCategories(){};

    async repoGetSubCategoriesWParent( genderTypes ){

        const query = `
            SELECT 
                ${this._tableName}.CategoryID, 
                ${this._tableName}.CategoryName, 
                ${this._subTableName}.SubcategoryID, 
                ${this._subTableName}.SubcategoryName
            FROM 
                ${this._tableName}
            JOIN 
                ${this._subTableName} ON ${this._tableName}.CategoryID = ${this._subTableName}.CategoryID
            WHERE 
                Categories.GenderID IN (?, 3) AND ${this._subTableName}.GenderID = ?`;

        const result = await db.execute(query, [genderTypes, genderTypes]);

        return result[0]
    };
};

const initRepo = () => {
    return new CategoryRepository();
};

const categoryRepository = initRepo();

module.exports = categoryRepository;