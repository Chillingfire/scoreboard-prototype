const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://dkanghta:G33jYXtpfoyh6t@cluster0.ybzas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

//require route

app.listen(3000, function() {
    console.log("express server is running on port 3000");
})