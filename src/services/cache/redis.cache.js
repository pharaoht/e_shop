const redis = require('redis');

require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV;
const DOMAIN = process.env.DOMAIN;
const LOCALDOMAIN = 'redis://localhost:6379';

class RedisCacheService {

    constructor(){
        //singleton Design pattern to prevent multi-instances
        if(!RedisCacheService.instance){

            console.log('*** creating redis client ***');

            this.redisClient = redis.createClient({
                url: ENVIRONMENT === 'production' ? DOMAIN : LOCALDOMAIN,
                socket: {
                    reconnectStrategy: function(retries) {
                        
                        if (retries > 5) {
                        
                            console.log('Too many attempts to reconnect. Redis connection was terminated');
                        
                            return new Error('Too many retries.');
        
                        } 
                        else return retries * 500;
                    }
                }
            });
        
            this.redisClient.on('error', (err) => console.error('Redis client error:', err));

            this.redisClient.on('end', () => console.error('Redis connection closed. Exiting.'));
        
            this.redisClient.connect().then(console.log('*** redis instance created ***')).catch(console.error);

            RedisCacheService.instance = this;
        }

        return RedisCacheService.instance;
    }
};

const instance = new RedisCacheService();
    
Object.freeze(instance);

module.exports = instance;