const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//create token
//possibly edit this for specific users
const createToken = (_id, isAdmin) => {
    return jwt.sign({_id, isAdmin}, process.env.SECRET, { expiresIn: '3d'})
}

//login user
const loginUser = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await User.login(username, password)

        //create a token
        const token = createToken(user._id, user.isAdmin)
        res.status(200).json({username, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}



//signup user
const signupUser = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await User.signup(username, password)

        //create a token
        const token = createToken(user._id, user.isAdmin)
        res.status(200).json({username, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {signupUser, loginUser}