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
                ci.ProductID,
                ci.ColorID,
                ci.SizeID,
                p.ProductName,
                p.Price,
                co.ColorName,
                s.SizeName
            FROM Carts c
            INNER JOIN CartItems ci ON c.ID = ci.CartID
            INNER JOIN Products p ON ci.ProductID = p.ProductID
            INNER JOIN Colors co ON ci.ColorID = co.ColorID
            INNER JOIN Sizes s ON ci.SizeID = s.SizeID
            WHERE c.SessionID = ? OR c.UserID = ?
        `;

        const [ result ] = await db.execute(query, [id, id]);

        return result;
    }

    async deleteExpiredCarts(){

        const query = `
            DELETE 
            FROM ${this._cartTable}
            WHERE ExpiresAt < NOW()
        `;

        const [ result ] = await db.execute(query);

        return result;
    }
};


const initCartRepo = () => {

    return new CartRepository();
};

module.exports = initCartRepo;