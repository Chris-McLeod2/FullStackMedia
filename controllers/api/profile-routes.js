const router = require('express').Router();
const { Profile, User } = require('../../models')


router.get('/', (req, res) => {
  Profile.findAll({
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Profile.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User,
        attributes: ['id', 'username']
      }
    ]
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No profile found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
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
      req.session.save(() => {
        req.session.bio = dbProfileData.id;
        req.session.name = dbProfileData.name;
        req.session.title = dbProfileData.title;
        req.session.main_languages = dbProfileData.main_languages;
        req.session.to_learn = dbProfileData.to_learn;
        req.session.loggedIn = true;

        res.json(dbProfileData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Profile.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then(dbProfileData => {
    if (!dbProfileData[0]) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbProfileData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Profile.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbProfileData => {
    if (!dbProfileData) {
      res.status(404).json({ message: 'No profile found with this id' });
      return;
    }
    res.json(dbProfileData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;