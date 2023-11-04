const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const pageRating = require('../models/ratingsmodel')

router.get("/getRatings", async (req, res) => {
    try {
        const ratings = await pageRating.findOne({ page: 'home'}).exec();
        res.status(200).json(ratings)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})

router.post("/createInitialRatings", async (req, res) => {
    const {page, numSmile, numNeutral, numFrown} = req.body
    try {
        const ratings = await pageRating.create({page, numSmile, numNeutral, numFrown})
        res.status(200).json(ratings)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})



module.exports = router;
