const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const url = 'https://www2.hm.com/en_us/productpage.1247667002.html';

// Folder to save images
const imageFolder = path.join(__dirname, 'images');

// Create the folder if it doesn't exist
if (!fs.existsSync(imageFolder)) {
  fs.mkdirSync(imageFolder);
}

const scrapeImages = async () => {
  try {
    // Fetch the HTML content of the page
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    });

    // Load the HTML into Cheerio
    const $ = cheerio.load(data);

    // Find the section with data-testid="grid-gallery"
    const gallerySection = $('[data-testid="grid-gallery"]').html();
    const $gallerySection = cheerio.load(gallerySection);
    const listItems = $gallerySection('li');

    // Find the noscript tag within the gallery section
    const li = $gallerySection('li').html();
    const $li = cheerio.load(li);
    for (const item of listItems.toArray()) {
      const $item = $gallerySection(item);

      console.log(item)
      console.log('*********')
    }
  

  } catch (error) {
    console.error('Error while scraping images:', error);
  }
};

scrapeImages();
