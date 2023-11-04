const comment = require('../models/comments')
const express = require('express');
const router = express.Router();


router.get("/getComments", async (req, res) => {
    try {
        const comments = await comment.find().exec();
        res.status(200).json(comments)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})

module.exports = router;
