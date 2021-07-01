const request = require('request');
let ar = process.argv.slice(2);

const fs = require('fs')



request(ar[0], (error, response, body) => {
  
  
  fs.writeFile(ar[1], body, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
    let size = body.length;
    console.log(`Downloaded and saved ${size} bytes to ${ar[1]}`);
  })
});