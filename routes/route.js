const express = require('express');
const router = express.Router();
const {GetPost,GetPostId,DeletePost,PostPost} = require("../Controller/UserController.js");


router.get('/post', GetPost);

router.get("/post/:id", GetPostId);

router.delete("/post", DeletePost);

router.post('/post',  PostPost);

module.exports = router;