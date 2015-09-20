	var express = require('express');
	var router = express.Router();
	var auth = require('../../lib/emp/auth');

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	});
	router.get('/login', function(req, res, next) {
	  res.send(auth.login({name:'yaomin.siym',pwd:'pwd'}));
	});
	router.get('/demo', function(req, res, next) {
	  res.send(auth.demo);
	});
	module.exports = router;
