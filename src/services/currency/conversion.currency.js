const cc = require('currency-converter-lt');

class CurrencyConversion {

    constructor(){

        this.converter = new cc();

        this.signs = {
            usd: '$',
            gbp: '£',
            eur: '€',
            jpy: '¥'
        }


    };

    async convertPrice(countryCode, value){
        
        try {

            const price = await this.converter.from('usd').to(countryCode).amount(value).convert()

            return `${this.signs[countryCode]}${parseFloat(price).toFixed(2)}`
        }
        catch(error){
            console.log(error, 'Error');
        }

    }
};



module.exports = CurrencyConversion
