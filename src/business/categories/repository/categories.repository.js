const db = require('../../../database/db.connection');

class CategoryRepository {

    constructor(){

        this._tableName = 'Categories';
        this._subTableName = 'Subcategories';
    }

    async repoGetAllCategories(){};

    async repoGetCategoriesByGenderId( genderId ){

        const query = `
            SELECT *
            FROM ${this._tableName}
            WHERE Categories.GenderID IN (?, 3)
        `;

        const [ result ] = await db.execute(query, [genderId]);

        return result;
    }

    async repoGetSubCategoriesByCategoryId( categoryId, genderId ){

        const query = `
            SELECT 
                SubcategoryID,
                SubcategoryName
            FROM ${this._subTableName}
            WHERE Subcategories.CategoryID = ? AND Subcategories.GenderID = ?
    
        `;

        const [ result ] = await db.execute(query, [categoryId, genderId]);

        return result;
    }

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