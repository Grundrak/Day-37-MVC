
const { blogPost } = require('../models/task.js');
 const GetPost = (req,res) =>{
    res.render('blog', {blogPost});
};

 const GetPostId = (req, res) => {
    let post = blogPost.find(
      (post) => post.id === parseInt(req.params.id)
    );
    if (post) {
      res.render('postDetails',{post : post});
    } else {
      res.status(404).send();
    }
  };
   const DeletePost =  (req, res) => {
    let post = blogPost.find(
      (post) => post.id === parseInt(req.params.id)
    );
    if (post !== -1) {
     blogPost.splice(post, 1);
      res.Status(200).send('The blog as delete with succces');
    } else {
      res.Status(404).send('Sorry but the blog didint delete');
    }
  };

   const PostPost = (req,res) =>{
     const { title, img, text } = req.body;
    const addPost = {id: blogPost.lenght++,title, img ,text}
    blogPost.push(addPost);
    if(addPost){
        res.status(201).send("Done the new post added")
    }else {
        res.status(400).send("Error in post repost please")
    }
}; 

module.exports = {
    GetPost,
    GetPostId,
    DeletePost,
    PostPost,
  };