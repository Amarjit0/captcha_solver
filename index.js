const axios = require('axios');
const Tesseract = require('tesseract.js');

const imageUrl = 'https://i.ibb.co/jTKYQqP/Captcha-United.png'; 

async function solveCaptcha(imageUrl) {
  try {
 
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');

  
    const { data: { text } } = await Tesseract.recognize(imageBuffer);

    const captcha = text.replace(/[^0-9a-zA-Z]/g, '');

    return captcha;
  } catch (error) {
    console.error(`you have ${error}`);
  }
}

solveCaptcha(imageUrl)
  .then(captcha =>  console.log(`Solved Captcha: ${captcha}`));




