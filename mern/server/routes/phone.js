const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectId;
const phones = require('../models/phone')
require("dotenv").config({ path: "../config.env" });

router.get("/getPhoneNumbers", async (req, res) => {

    try {
        const ratings = await phones.find().exec();
        res.status(200).json(ratings)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})
router.post("/putPhoneNumbers", async (req, res) => {
    const {phoneNumber} = req.body
    try {
        const number = await phones.create({phoneNumber})
        res.status(200).json(number)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})
router.get("/push", async (req, res) => {
    const {message} = req.query
    try {
        const numbers = await phones.find().exec();
        const phoneNumbersList = numbers.map(number => number.phoneNumber);
        console.log(phoneNumbersList)
        
        const client = require('twilio')(process.env.TWILIO_ACCOUNT_ID, process.env.TWILIO_TOKEN);

        for (const number of phoneNumbersList){
            client.messages
                .create({
                    body: message,
                    from: '+18554990197',
                    to: number
                })
            .then(message => console.log(message.sid))
        }
        res.status(200).json(numbers)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})
module.exports = router;

