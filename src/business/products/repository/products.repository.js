const db = require("../../../database/db.connection");

class ProductsRepository {

    constructor(){
        this._tableName = 'Products';
        this._genderIdColumn = 'GenderID';
        this._subCatIdColumn = 'SubcategoryID';
        this._materialIdColumn = 'MaterialID';
        this._categoryIdColumn = 'CategoryID';
    };

    paramBuilder( params ){

        const columnMapping = {
            genderId: this._genderIdColumn,
            subCategoryId: this._subCatIdColumn,
            materialId: this._materialIdColumn,
            categoryId: this._categoryIdColumn,
        };

        const conditions = [];
        const queryParams = [];

        for(const [key, value] of Object.entries(params)){

            if(columnMapping[key] && value){
                conditions.push(`p.${columnMapping[key]} = ?`)
                queryParams.push(value);
            }
        }

        const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')} ` : ''

        return {
            whereClause,
            queryParams,
        }
    }


    async repoGetAllProducts( params ){

        const { whereClause, queryParams } = this.paramBuilder(params);

        const query = `
            SELECT 
                p.ProductID,
                p.ProductName,
                p.Price,
                p.Description,
                p.CreatedAt,
                p.UpdatedAt,
                g.GenderName AS GenderName,
                m.MaterialName AS MaterialName,
                s.SubcategoryName AS SubcategoryName,
                c.CategoryName AS CategoryName,
                i.ImageURL AS ImageUrl,
                GROUP_CONCAT(clr.ColorCode SEPARATOR ', ') AS ColorCodes,
                GROUP_CONCAT(clr.ColorName SEPARATOR ', ') AS ColorNames
            FROM 
                ${this._tableName} p
                INNER JOIN (
                    SELECT ProductID, MIN(ImageID) AS FirstImageID
                    FROM Images
                    GROUP BY ProductID
                ) AS first_image ON p.ProductID = first_image.ProductID
                INNER JOIN Images i ON first_image.FirstImageID = i.ImageID
                INNER JOIN Genders g ON p.GenderID = g.GenderID
                INNER JOIN Materials m ON p.MaterialID = m.MaterialID
                INNER JOIN Subcategories s ON p.SubcategoryID = s.SubcategoryID
                INNER JOIN Categories c ON p.CategoryID = c.CategoryID
                LEFT JOIN ProductColors pc ON p.ProductID = pc.ProductID
                LEFT JOIN Colors clr ON pc.ColorID = clr.ColorID
            ${whereClause}
            GROUP BY p.ProductID
        `;

        const [ data ] = await db.execute(query, queryParams);

        return data;

    }
};

const initProducts = () => {
    return new ProductsRepository();
};


module.exports = initProducts;