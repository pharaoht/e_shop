class MaterialsDal {

    constructor(){

    }

    async fromDal(data){
        
        const dal = data.map((itm) => {

            return {
                id: itm.MaterialID,
                materialName: itm.MaterialName
            }
        });


        return dal;
    }
};

const initMaterialsDal = () => {
    return new MaterialsDal()
}

module.exports = initMaterialsDal;