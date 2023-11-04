const article = require('../models/article')
const express = require('express');
const router = express.Router();


router.get("/getArticles", async (req, res) => {
    const {id} = req.query
    try {
        const articles = await article.findById(id).exec();
        res.status(200).json(articles)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})

module.exports = router;
