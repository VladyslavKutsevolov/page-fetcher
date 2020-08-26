const fs = require('fs');
const request = require('request');
const path = require('path');

request('http://www.example.edu/', (err, res, body) => {
  if (err) console.log(err);
  fs.writeFile(path.resolve(__dirname, 'index.html'), body, (err) => {
    if (err) console.log(err);
    const fileSize = fs.statSync('./index.html').size;
    console.log(`Downloaded and saved ${fileSize} bytes to ./index.html`);
  });
});
