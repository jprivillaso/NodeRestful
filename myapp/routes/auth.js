// var express = require('express');
// var router  = express.Router();

// var jwt     = require('jsonwebtoken');
// var app     = express();

// /* Authentication  */
// router.post('/authenticate', function(req, res) {

//   var name = req.body.user;
//   var pass = req.body.password;

//   if (name === "juan" && pass === "123") {

//     var token = jwt.sign("juan", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NDY1MDViMDFmYTAzYmUwMTUxMDYwOWIiLCJuYW1lIjoiTmljayBDZXJtaW5hcmEiLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiYWRtaW4iOnRydWUsIl9fdiI6MH0.ah-NFQ1967WVeN6lYNAahT7hZtshG6kw6AW3ncuJOYw", {
//       expiresInMinutes: 1440 // expires in 24 hours
//     });

//     app.set('superSecret', token); // sec
//     console.log("User authenticated successfully");
//     res.status(500).json({token: token});

//   } else {

//     console.error("Invalid login data");
//     res.status(400).send("Invalid login data");

//   }

// });

// module.exports = router;
// module.exports = app;