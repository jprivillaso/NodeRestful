var express = require('express');
var router = express.Router();
var authentication = require("../app/authentication.js");

/* GET users listing. */
router.get('/userlist', function(req, res) {

    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
    
});

module.exports = router;
