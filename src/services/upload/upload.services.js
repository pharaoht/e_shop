const cloudinary = require('cloudinary').v2;
require('dotenv').config();

class ImageUploadService {

    constructor(){

        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

    };

    async deleteImage( imageUrl, ) {

        const publicId = imageUrl

        try {

            console.log('**deleting image**');

            const result = await cloudinary.uploader.destroy(publicId);

            console.log('**image deletion successful**')

            return true;

        } catch (error) {
        
            console.log('**image deletion failed**');

            console.log(error, error.message)

            return false;

        }
    }

    async uploadImage( imageUrl, folder ){

        console.log('uploading image....')
    
        try {

            const uploadResult = await cloudinary.uploader.upload(
                imageUrl,
                {
                    folder: folder,
                    resource_type: 'image',
                    transformation: [
                        { width: 540, height: 960, crop: 'fill' },
                        { fetch_format: 'auto', format: 'avif' }
                    ]
                }
            );

            console.log('**!Successful upload!**');

            return uploadResult;
           
        } catch (error) {

            console.error('Error uploading image:', error);

            throw error;
        }
    }
};

const initImageUploadService = () => {
    return new ImageUploadService()
}

module.exports = initImageUploadService;
