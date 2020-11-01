var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Spandan' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.post('/login', function(req, res){
  console.log(req.body);
  let data = {
    name: req.body.name,
    password: req.body.password
  }; 
  res.redirect('/profile');
})

module.exports = router;
