const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote } = require('../../models');
const auth = require('../../util/auth.js')
// get all posts /api/posts
router.get('/', (req, res) => {
  Post.findAll({
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
   
});

// user can create new post
router.post('/',  (req, res) => {
    //req.body={title, content}
    // req.session.user_id
    console.log('post route hit')
    var newPost = req.body;
    newPost.user_id = req.session.user_id

    Post.create(newPost)
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

router.put('/upvote', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
