const authController = require('express').Router();
const User = require('../Models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

authController.post('/register', async(req, res)=>{
    try {
        const userDetail = req.body
        // Destructuring the email and username from the userDetail

        const {username, email, } = userDetail
        
        // Checking if there's already a user with such email or username

        const userExist = await User.findOne({$or: [{email}, {username}]});
        if(userExist){
            throw new Error("User with this email or username already exist")
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // create new User

        const newUser = await User.create({...req.body, password:hashedPassword});

        const {password, ...others} = newUser._doc

       const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn : "6hr"})

       newUser.token = token 
       await newUser.save()

       return res.status(200).json({others, token})
    
    } catch (error) {
        res.status(500).json(error.message)
    }
});

authController.post('/login', async(req, res) => {
    try {
        // pulling the user info from userSchema
        const userDetail = req.body;
        const {username, email} = userDetail

        // checking if the provided details for login already exist

        const existingUser = await User.findOne({$or: [{username}, {email}]});

        if(!existingUser){
            throw new Error("Invalid User Credentials")
        }

        // compare the user password to enable them login if the username or email exist

        const comparePassword = await bcrypt.compare(req.body.password, existingUser.password)
        if(!comparePassword){
            throw new Error("Ivalid User credentials")
        }

        const {password, ...others} = existingUser._doc

        // if the compared password matches then create a token

        const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: '6hr'});

        // pass the created user token as token

        existingUser.token = token;
        return res.status(200).json({others, token})


        
    } catch (error) {
        res.status(500).json(error.message)
    }
})



module.exports = authController