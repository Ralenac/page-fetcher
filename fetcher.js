
const request = require('request');
const fs = require("fs");

const path = process.argv[3];
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log("Error:", error);
  }
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.log("Error:", error);
    } else {
      fs.stat(path, (error, stats) => { // It is the Stats object that contains the details of the file path. we need size
        if(error){
          console.log("Error: ", error)
        } else {
          console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
        }
      })
    }
  })
})
  
// node fetcher.js http://www.example.edu/ ./index.html
//Downloaded and saved 1256 bytes to ./index.html


