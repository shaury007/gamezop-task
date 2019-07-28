var express = require('express');
var router = express.Router();
var users = require('../routes/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  //executes function getUserList, fetches data from database and renders to index page
  const getUsers = users.getUserList(req, res);
        getUsers.then((data) => {
          res.render('index', data);
        });
});

//route to add a new user
router.post('/addUser', function(req,res){
  //executes function addUser from users.js
    users.addUser(req.body).then((result) => {
      res.send(result);
      console.log('result--------',result);   
    }).catch((e) => {
      res.status(500, {
        error: e,
      });      
    });
});

module.exports = router;
