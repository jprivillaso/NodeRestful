var express  = require('express');
var jwt = require('jsonwebtoken');
var app = express();
// ---------------------------------------------------------
// authentication (no middleware necessary since this isnt authenticated)
// ---------------------------------------------------------
// http://localhost:8080/api/authenticate
app.post('/', function(req, res) {

  console.log("authenticating");

  var user = {
    password: req.body.password
  }

  if (!user) {
    res.json({ success: false, message: 'Authentication failed. User not found.' });
  } else if (user) {

    // check if password matches
    if (user.password != req.body.password) {
      res.json({ success: false, message: 'Authentication failed. Wrong password.' });
    } else {

      // if user is found and password is right
      // create a token
      var token = jwt.sign(user, app.get('superSecret'), {
        expiresInMinutes: 15 // expires in 24 hours
      });

      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });
    }   

  }

});

module.exports = app;