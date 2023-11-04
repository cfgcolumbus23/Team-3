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
router.post("/addMentors", async (req, res) => {
    const {name, role, bio, imageURL} = req.body
    try {
        const mentor = await mentors.create({name, role, bio, imageURL})
        res.status(200).json(mentor)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})

module.exports = router;