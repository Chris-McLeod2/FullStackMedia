const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote } = require('../../models');

// get all users
router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/upvote', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
