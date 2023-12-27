var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodejs-Express App' });
});

router.get('/users', (req, res, next)=>{
  res.render("users", { title: 'Nodejs-Express App' })
})

router.get('/users/details', (req, res, next)=>{
  res.send("detail")
})



module.exports = router;
