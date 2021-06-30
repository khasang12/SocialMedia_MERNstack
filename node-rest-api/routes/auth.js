const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
//Register
router.post('/register',async function(req,res){   
    try{
        //create hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password.toString(), salt);
        //create new user with required info
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
})
router.post('/login',async function(req,res){   
    try{
        const {email,password} = req.body
        const user = await User.findOne({email:email})
        if(!user) return res.status(404).json("Account not found")
        else{
            const validPass = await bcrypt.compare(req.body.password,user.password)
            if(!validPass) return res.status(400).json("Wrong password")
            else{
                res.status(200).json(user);
            }
        }
    } catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;