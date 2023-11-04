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
router.get("/updateRatings", async (req, res) => {
    const { emotion, page } = req.query;
    try {
        // Create a dynamic update object with the emotion variable as the field name
        const updateObject = {};
        updateObject[emotion] = 1;

        // Use the dynamic update object in the update operation
        const update = await pageRating.updateOne({ page: page }, { $inc: updateObject }).exec();

        res.status(200).json(update);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

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
