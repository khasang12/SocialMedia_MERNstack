const router = require('express').Router();
const Post = require('../models/Post')
//create post
router.post('/',async(req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savePost = await newPost.save();
        res.status(200).json(savePost)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//update post
router.put('/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId===req.body.userId){
            await post.updateOne({$set:req.body})
            res.status(200).json("Updated!!")
        }
        else{
            res.status(403).json("You cant update this post")
        }
    }
    catch(err){
        res.status(500).json(err)
    }
})
//delete post
router.delete('/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId===req.body.userId){
            await post.deleteOne()
            res.status(200).json("Deleted!!")
        }
        else{
            res.status(403).json("You cant delete this post")
        }
    }
    catch(err){
        res.status(500).json(err)
    }
})
//like post
//get a post
//get timeline posts
module.exports = router;