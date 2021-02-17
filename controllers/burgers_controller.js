const express = require("express");
const router = express.Router();
const burgers = require("../models/burger.js");

router.get("/", function(req,res){
    res.redirect("burgers")
});



// export
module.exports = burgers_controller;