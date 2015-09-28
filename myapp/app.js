var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var jwt           = require('jsonwebtoken');

// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/restfulNodeApp');

var indexRoute = require('./routes/index'); 
var usersRoute = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var config = require('./config'); // get our config file
app.set('superSecret', config.secret); // secret variable

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
var apiRoutes = express.Router(); 

// ---------------------------------------------------------
// authentication (no middleware necessary since this isnt authenticated)
// ---------------------------------------------------------
// http://localhost:8080/api/authenticate
app.post('/authenticate', function(req, res) {

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

// Make our db accessible to our router
/*app.use(function(req,res,next){
    req.db = db;
    next();
});*/


// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
apiRoutes.use(function(req, res, next) {

  console.log("middleware say hi");

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;  
        next();
      }
    });
 
  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
      success: false, 
      message: 'No token provided.'
    });
    
  }
  
});

// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------
apiRoutes.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

app.use('/users', usersRoute);
app.use('/api', apiRoutes);
module.exports = app;