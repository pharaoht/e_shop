class CategoryDal {

    constructor(){}

    async fromDal( data, format ){

        if(format){
            return this.formatCatsWSubCats(data)
        }

        const dal = data.map((itm) => {

            return {
                value: itm.CategoryID || itm.SubcategoryID,
                displayName: itm.CategoryName || itm.SubcategoryName
            }
        });

        return dal;
    };

    formatCatsWSubCats(data){
    
        const cats = [];

        for (const itm of data) {
  
            const existingCategoryIndex = cats.findIndex(cat => cat.categoryName === itm.CategoryName);

            if (existingCategoryIndex === -1) {
                
                cats.push({
                    categoryId: itm.CategoryID,
                    categoryName: itm.CategoryName,
                    subCategories: [{ id: itm.SubcategoryID, subCategoryName: itm.SubcategoryName }]
                });
            } else {
                
                cats[existingCategoryIndex].subCategories.push({
                    id: itm.SubcategoryID,
                    subCategoryName: itm.SubcategoryName
                });
            }
        }

        return cats;
    }

    async toDal(){}
};

const initDal = () => {
    return new CategoryDal()
};

const categoryDal = initDal();

module.exports = categoryDal;