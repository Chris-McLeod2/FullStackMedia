const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');
  });

router.get('/login', (req, res) => {

    res.render('login');
  });

  router.get('/posts', (req, res) => {

    res.render('posts');
  });

  router.get('/profile', (req, res) => {

    res.render('profile');
  });



module.exports = router;