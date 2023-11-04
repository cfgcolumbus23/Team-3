const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectId;
const pageRating = require('../models/ratingsmodel')

router.get("/getRatings", async (req, res) => {
    const { page } = req.query
    console.log(page)
    try {
        const ratings = await pageRating.findOne({ page: page }).exec();
        res.status(200).json(ratings)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})
router.get("/updateRatings", async(req, res) => {
    const { emotion } = req.query
    try {

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
