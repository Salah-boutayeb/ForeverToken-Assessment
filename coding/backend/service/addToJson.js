// file system module to perform file operations

const fs = require("fs");

const storeCandidate = (jsonData) => {
  // parse json
  console.log(jsonData);

  // stringify JSON Object
  var jsonContent = JSON.stringify(jsonData, null, 4);
  console.log(jsonContent);

  fs.writeFile("./database/db.json", jsonContent, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
};

module.exports = {
  storeCandidate,
};
