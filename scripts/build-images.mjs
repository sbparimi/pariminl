import sharp from 'sharp';
// Generate share imagery from Suresh's original monogram artwork.
await sharp('public/assets/suresh-monogram.svg').resize(1200, 630, { fit: 'contain', background: '#07070a' }).jpeg({quality: 85}).toFile('public/assets/og-image.jpg');
console.log('Suresh share image built');
