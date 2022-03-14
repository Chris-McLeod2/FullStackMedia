const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const auth = require('../util/auth.js')

router.get('/', (req, res) => {
    res.render('homepage');
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    res.render('login');
  });

  router.get('/posts', (req, res) => {
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
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

          res.render('posts', {posts})
        }) 
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/profile', (req, res) => {
    if (req.session.loggedIn) {
      res.render('profile');
      }
      else {
        res.redirect('login')
      }
    }
    
  );

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });

  router.get('/add-post', auth, (req, res) => {

    res.render('add-post');
  });

module.exports = router;