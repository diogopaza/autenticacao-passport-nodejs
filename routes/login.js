var express = require('express');
var router = express.Router();
const passport = require('passport');


router.get('/', function(req, res, next) {
  console.log("voltei get");
  if(req.query.fail)
    res.render('login', {message: 'Usuário e/ou senha incorretos!'});
  else
    res.render('login', {message: null});
  });
  
router.post('/',  
  passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login?fail=true'
  })
);

  module.exports = router;