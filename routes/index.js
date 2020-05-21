var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./public/js/coffee.json', 'utf8', (err, data) => {
    const dataJson = JSON.parse(data.toString());
    res.render('index', { title: 'Coffee Guide', dataJson } );
  });
});



module.exports = router;
