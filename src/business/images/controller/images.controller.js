async function httpGetImagesById(req, res) {
    
    try {

        const { id } = req.params;

        //init repo

        //get images repo method

        //dal


        //return
        
    } catch (error) {

        console.error(error);

        return res.status(400).json({'error': error});  
    }
};

module.exports = {
    httpGetImagesById
}