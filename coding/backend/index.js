const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const { storeCandidate } = require("./service/addToJson.js");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.post("/candidate", (req, res) => {
  storeCandidate(req.body);
  if (!req.files) {
    res.send({
      status: false,
      message: "No file uploaded",
    });
  } else {
    let cv = req.files.CV;

    cv.mv("./uploads/" + cv.name);

    res.send({
      message: "File is uploaded",
      data: {
        candiate: req.body,
        name: cv.name,
        mimetype: cv.mimetype,
        size: cv.size,
      },
    });
  }
});
const port = 5555;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
