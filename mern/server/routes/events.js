const events = require('../models/event')
const express = require('express');
const router = express.Router();


router.get("/addEvent", async (req, res) => {
    const { title, date } = req.query
    console.log(title)
    console.log(date)
    try {
        const event = await events.create({title, date})
        res.status(200).json(event)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})

router.get("/getEvents", async (req, res) => {
  
    try {
        const event = await events.find().exec()
        res.status(200).json(event)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})

module.exports = router;
