const express = require("express");
const cors =require("cors");
const fileUpload = require("express-fileupload");

const app = express();
app.use(fileUpload());


app.get("/", (req, res) => {
  res.send("Hello world!");
});
// app.get("/suraj", (req, res) => {
//   res.send("Hello Sirak!");
// });

app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/public/requirements/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/requirements/${file.name}` });
  });
});

app.listen(5000, () => console.log("Server Started....."));
