const router = require('express').Router();
const Post = require('../models/Post')
const User = require('../models/User')
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
        const post = await Post.findOne({_id:req.params.id});
        console.log(post)
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
//like and dislike post
router.put('/:id/like',async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.like.includes(req.body.userId)){
            await post.updateOne({$push:{like:req.body.userId}})
            res.status(200).json("The post has been Liked")
        }
        else{
            await post.updateOne({$pull:{like:req.body.userId}})
            res.status(200).json("The post has been Disliked")
        }
    }
    catch(err){
        res.status(500).json(err)
    }
})
//get a post
router.get('/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err)
    }
})
//get timeline posts
router.get('/timeline/all',async (req,res)=>{
    try{
        const user = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: user._id})
        const friendPosts = await Promise.all(
            user.followins.map((friendId)=>{
                return Post.find({userId: friendId})
            })
        )
        res.status(200).json(userPosts.concat(...friendPosts))
    }
    catch(err){
        res.status(500).json(err)
    }
})
module.exports = router;