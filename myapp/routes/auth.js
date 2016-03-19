var express  = require('express');
var jwt = require('jsonwebtoken');
var app = express();
// ---------------------------------------------------------
// authentication (Open web service to authenticate the user)
// ---------------------------------------------------------
// http://localhost:8080/api/authenticate
app.post('/', function(req, res) {

  var username = req.body.username;
  var password = req.body.password;

  if (username && password) {

    var db = req.db;
    var collection = db.get('userlist');

    collection.find({username: username, password: password}, {}, function(e,docs){

      if (docs && docs.length > 0) {

        var user = docs[0];
        
        if (!user) {
          res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

          // check if password matches
          if (user.password != password) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {

            // if user is found and password is right
            // create a token
            var token = jwt.sign(user, app.get('superSecret'), {
              expiresInMinutes: 15 // expires in 24 hours
            });

            res.status(200);
            res.json({
              success: true,
              message: 'Enjoy your token!',
              token: token
            });
          }   

        }

      } else {
        res.status(500);
        res.json({ success: false, message: 'Authentication failed. No user found' });
      }

    });

  } else {
    res.status(400);
    res.json({ success: false, message: 'Authentication failed. Parameters missing' });
  }

});

module.exports = app;