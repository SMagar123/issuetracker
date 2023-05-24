const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "testToken",
  });
});

app.use("/login-admin", (req, res) => {
  res.send({
    token: "adminToken",
  });
});
app.listen(8080, () => console.log("API is running on localhost:8080/login "));
