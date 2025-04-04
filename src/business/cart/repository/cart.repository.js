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

        const query = `
            UPDATE CartItems ()
        `;
    }

    async repoDeleteCart(productId, sizeId, colorId, cartId){

        const query = `
            DELETE FROM CartItems
            WHERE ProductID = ? AND SizeID = ? AND ColorID = ? AND CartID = ?
            ORDER BY ID ASC
            LIMIT 1;
        `;

        const [ result ] = await db.execute(query, [productId, sizeId, colorId, cartId]);

        console.log(result)
        return result;
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
                s.SizeName,
                (
                    SELECT ImageURL
                    FROM Images i
                    WHERE i.ProductID = ci.ProductID
                    LIMIT 1
                ) as ImageURL,
                COUNT(*) AS qty,
                SUM(COUNT(*)) OVER () AS totalItems,
                (COUNT(*) * p.Price) AS subTotal,
                SUM(COUNT(*) * p.Price) OVER () AS grandTotal 
            FROM Carts c
            INNER JOIN CartItems ci ON c.ID = ci.CartID
            INNER JOIN Products p ON ci.ProductID = p.ProductID
            INNER JOIN Colors co ON ci.ColorID = co.ColorID
            INNER JOIN Sizes s ON ci.SizeID = s.SizeID
            WHERE c.SessionID = ? OR c.UserID = ?
            GROUP BY 
                c.ID, UserID, SessionID, IsActive, ExpiresAt, c.CreatedAt, c.UpdatedAt, 
                ci.ProductID, ci.ColorID, ci.SizeID, p.ProductName, p.Price, co.ColorName, s.SizeName;
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