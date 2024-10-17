
class ImagesDal {

    constructor(){

    };

    async fromDal( data ){

        const dal = await data.map((itm) => {

            return {
                imageId: itm.ImageID,
                url: itm.ImageURL,
            }
        });
        
        return dal
    };
};

const initImageDal = () => {
    return new ImagesDal();
}

module.exports = initImageDal;