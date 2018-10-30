const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const routes = require("./routes");

const db = require("./models");

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);



app.listen(PORT, function() {
    console.log("This application is running on port " + PORT + "!!!!!!!!!!");
});
