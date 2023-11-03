const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;


router.route("/getRatings").get(function(req, res) {
    console.log("TEST")
    let db_connect = dbo.getDb("website");
    db_connect.collection("pageRating").find({}).toArray(function(err, result){
        if (err) throw err;
        res.json(result);
    })
})



module.exports = router;
