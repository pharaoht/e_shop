function deleteFileFromFs(pathToFile){
    fs.unlink(pathToFile, (err) => {
      console.log('hiiiiiii')
      if (err){
         console.error('Failed to delete local file:', err);

         return false;
      }

      console.log('file deleted from local');

      return true
    });
};


module.exports = {
    deleteFileFromFs
}