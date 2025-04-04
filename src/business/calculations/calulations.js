class Calculations {

    constructor(){ }

    deliveryFee(isInternational = false){

        if(isInternational){

            return 7.99
        }

        return 2.99
    }

    
}

const calculations = new Calculations();

module.exports = calculations;