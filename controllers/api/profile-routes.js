const router = require('express').Router();
const { Profile } = require('../../models')



router.get('/', (req, res) => {
    Profile.findAll({
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
    Profile.create({
        bio: req.body.bio,
        name: req.body.name,
        title: req.body.title,
        main_languages: req.body.main_languages,
        to_learn: req.body.to_learn
    })
    .then(dbProfileData => {
        res.json(dbProfileData);
    });
});




module.exports = router;