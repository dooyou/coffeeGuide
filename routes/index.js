var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Coffee Guide', data:[{"name":"espresso"},{"name":"doppio"}] });

});

module.exports = router;
