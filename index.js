const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://nodebr.org/sobre/';

async function executeScrape() {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  
  const entryContent = $('div.entry-content > p').text();
  console.log(entryContent);
}

executeScrape();