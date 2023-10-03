const express = require('express');
const router = express.Router();
const UserController = require("../Controller/UserController.js");


router.get('/post', UserController.GetPost);

router.get("/post/:id", UserController.GetPostId);

router.delete("/post", UserController.DeletePost);

router.post('/post', UserController.PostPost);

module.exports = router;