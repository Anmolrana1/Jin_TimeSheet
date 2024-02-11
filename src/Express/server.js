const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./router");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb+srv://Anmolrana:123Anmol@cluster0.3mz9fpq.mongodb.net/");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");


app.use("/api",routes); 
  


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
