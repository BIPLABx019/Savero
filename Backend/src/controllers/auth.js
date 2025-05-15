const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.post("/login",(req,res) => {
    console.log("login request sent")
})

app.listen(PORT)