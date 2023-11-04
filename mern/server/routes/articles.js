const article = require('../models/article')
const express = require('express');
const router = express.Router();


router.get("/getArticles", async (req, res) => {
    try {
        const articles = await article.find().exec();
        res.status(200).json(articles)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})

module.exports = router;
