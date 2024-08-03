const express = require("express");

const app = express();

const cors = require("cors")
app.use(cors({origin:"*"}))
app.use(express.json())
app.use("/product",require("./router/products"))

app.listen(8080, (e) => {
  if (e) {
    console.log(`Failed to start server ${e}`);
  } else {
    console.log("server started successfully");
  }
});

const mongoose = require("mongoose");

const mongoDbUrl = "mongodb+srv://goodwin:thala12345@cluster0.mvinbgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log(`${mongoDbUrl} connected successfully`);
  })
  .catch((error) => {
    console.log(`Failed to connect ${(mongoDbUrl, error)}`);
  });
