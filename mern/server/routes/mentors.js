const mentors = require('../models/mentor')
const express = require('express');
const router = express.Router();

router.get("/getMentors", async (req, res) => {
    try {
        const mentorsList = await mentors.find().exec();
        res.status(200).json(mentorsList)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})

module.exports = router;