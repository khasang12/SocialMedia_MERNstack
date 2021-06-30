const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
//update user
router.put('/:id',async function(req,res){
    if(req.params.id===req.body.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt)
            }
            catch(err){
                return res.status(500).json(err)
            }
        }
        try{
            const user = await User.findByIdAndUpdate({_id:req.params.id},{
                $set: req.body
            })     
        }
        catch(err){
            return res.status(500).json(err)
        }
        res.status(200).json("Account has been updated")
    }
    else{
        res.status(403).json("You can not update this account")
    }
})
//delete user
router.delete('/:id',async function(req,res){
    if(req.params.id===req.body.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete({_id:req.params.id})
            res.status(200).json("Account has been deleted")    
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
    else{
        res.status(403).json("You can not delete this account")
    }
})
// get a user
router.get('/:id',async function(req, res) {
        try{
            const user = await User.findById(req.params.id)
            const {password,updatedAt,...other} = user._doc;
            res.status(200).json(other)
        }
        catch(err){
            return res.status(500).json(err)
        }
        
})
//follow a user
router.put('/:id/follow',async function(req, res) {
    if(req.body.id !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.id);
            if(!user.followers.includes(req.body.id)){
                await user.updateOne({$push:{followers:req.body.id}});
                await currentUser.updateOne({$push:{followins:req.params.id}});
            }
            else{
                res.status(403).json("You have already followed this account")
            }
            res.status(200).json("follow successful !!")
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
    else{
        res.status(403).json("you can't follow yourself")
    }
})
//unfollow a user
router.put('/:id/unfollow',async function(req, res) {
    if(req.body.id !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.id);
            if(user.followers.includes(req.body.id)){
                await user.updateOne({$pull:{followers:req.body.id}});
                await currentUser.updateOne({$pull:{followins:req.params.id}});
            }
            else{
                res.status(403).json("You didnt follow this user ")
            }
            res.status(200).json("unfollow successful !!")
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
    else{
        res.status(403).json("you can't unfollow yourself")
    }
})
module.exports = router;