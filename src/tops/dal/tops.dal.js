const moment = require('moment');

class TopsDataAccessLayer {

    constructor(){
        this.createdAt = 'createdAt';
        this.updatedAt = 'updatedAt';
    }
    
    async fromDal( data ){

        const dal = data.map(record => {

            const temp = {};

            for(const key in record) {

                const value = record[key];

                const momentValue = moment(value, moment.ISO_8601, true);

                // Only process and format if it's a valid date
                temp[key] = momentValue.isValid() ? momentValue.utc().format('MM/DD/YY HH:mm') : value;
            }

            return temp;
        });

        return dal;

    }
    
    async toDal(){}

    async repoQueryString( queryArr, limit, offset ){

        if(queryArr.length == 0) return undefined;

        const queryString = '';

        const params = [];

        for( const columns of queryArr ){

            for( const key in columns ){

                if(!columns[key]){
                    
                    if(queryString == ''){
                        queryString + `WHERE ${key} = ?`
                    }
                    else{
                        queryString + ` AND ${key} = ?`
                    }

                    params.push(columns[key]);
                }
            }
        };

        params.push(limit, offset);

        return { queryString, params };
    };
};

const initDal = () => new TopsDataAccessLayer();

const topsDal = initDal();

module.exports = topsDal