var express = require('express');
var router = express.Router();
const user = require('./../controllers/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/users/all",user.getAll);

module.exports = router;
