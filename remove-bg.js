// This script uses Jimp to remove white background from photo.jpeg and saves as photo.png in client/public
const Jimp = require('jimp');
const path = require('path');

const INPUT = path.join(__dirname, 'client', 'src', 'Public', 'photo.jpeg');
const OUTPUT = path.join(__dirname, 'client', 'public', 'photo.png');

Jimp.read(INPUT)
  .then(image => {
    image.rgba(true);
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red   = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue  = this.bitmap.data[idx + 2];
      // If pixel is close to white, make it transparent
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0; // alpha
      }
    });
    return image.writeAsync(OUTPUT);
  })
  .then(() => {
    console.log('Saved transparent photo to public/photo.png');
  })
  .catch(err => {
    console.error('Error:', err);
  });
