var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
    res.json("Hello auth");
});

module.exports = router;