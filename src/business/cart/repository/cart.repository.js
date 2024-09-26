const db = require("../../../database/db.connection");

class CartRepository {

    constructor(){

        this._cartTable = 'Carts';
    };

    async repoCheckIfCartExist(id){

        const query = `
            SELECT *
            FROM ${this._cartTable}
            WHERE SessionID = ? OR UserID = ?
        `;

        const [ result ] = await db.execute(query, [id, id]);

        if(result.length > 0) return result[0];

        return false;
    }

    async repoAddToCart(cartId, productId, colorId, sizeId){

        const query = `
            INSERT INTO CartItems (CartID, ProductID, ColorID, SizeID) 
            VALUES (?, ?, ?, ?)
        `;

        const [ result ] = await db.execute(query, [cartId, productId, colorId, sizeId]);

        return result;

    }

    async repoUpdateCart(){

    }

    async repoCreateNewCart(sessionId, userId){

        const query = `
            INSERT INTO Carts (SessionID, UserID)
            VALUES(?,?)
        `;

        const [ result ] = await db.execute(query, [sessionId, userId]);

        return result;
    }

    async repoGetCartBySessionId(id){

        const query = `
            SELECT 
                c.ID,
                UserID,
                SessionID,
                IsActive,
                ExpiresAt,
                c.CreatedAt,
                c.UpdatedAt,
                ci.Price,
                ci.
            FROM ${this._cartTable} c
            INNER JOIN CartItems ci ON c.ID = ci.CartID
            WHERE c.SessionID = ? OR c.UserID = ?
        `;

        const [ result ] = await db.execute(query, [id, id]);

        return result;
    }
};


const initCartRepo = () => {

    return new CartRepository();
};

module.exports = initCartRepo;