const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.use("/login", (req, res) => {
  res.send({
    token: "testToken123",
  });
});

app.listen(8080, () => console.log("API is running on localhost:8080/login "));
