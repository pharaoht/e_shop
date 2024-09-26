const db = require('../../../database/db.connection');

class ColorsRepository {

    constructor(){
        this.productColorsTableName = 'ProductColors';
        this.colorsTableName = 'Colors';
    };

    async repoGetColorsByProductId(id){

        const query = `
            SELECT 
                p.ProductColorID,
                p.ProductID,
                p.ColorID,
                c.ColorName,
                c.ColorCode
            FROM ${this.productColorsTableName} p
            INNER JOIN Colors c ON p.ColorID = c.ColorID
            WHERE ProductID = ?
        `;

        const [ data ] = await db.execute(query, [id]);

        return data;
    }
};

const initColorsRepository = () => {
    return new ColorsRepository()
};

module.exports = initColorsRepository;