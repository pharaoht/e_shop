const moment = require('moment');

class TopsDataAccessLayer {

    constructor(){
        this.createdAt = 'createdAt';
        this.updatedAt = 'updatedAt';
    }
    
    async fromDal( data  ){
        
        const dal = [];

        for( const record of data ){

            const temp = {};

            for(const key in record){

                const value = record[key];
    
                if(moment(value, moment.ISO_8601, true).isValid()){

                    temp[key] = moment.utc(value).format('MM/DD/YY HH:mm');
                }
                else {

                    temp[key] = value;
                }
            };

            dal.push(temp);
        };
        
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