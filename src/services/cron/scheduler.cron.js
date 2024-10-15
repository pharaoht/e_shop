const cron = require('node-cron');
const initCartRepository = require('../../business/cart/repository/cart.repository')

class CronScheduleService {

    constructor(){
        this.scheduleCronJob()
    };

    async deleteExpiredCarts(){

        try {

            const cartRepo = initCartRepository();

            console.log('running cron job: deleteExpiredCarts');
    
            const result = await cartRepo.deleteExpiredCarts();

            console.log(`${result.affectedRows} expired carts were deleted`);
        }
        catch(error){

            console.error(error);

            console.log('Error occured when trying to delete expired carts');

        }

    };

    scheduleCronJob(){
        //this is run at min 0 hr 0 everyday
        cron.schedule('0 0 * * * *', () => {
            this.deleteExpiredCarts()
        });

    }
};

const cronService = new CronScheduleService();

module.exports = cronService;