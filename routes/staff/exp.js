	var express = require('express');
	var router = express.Router();
	var exp = require('../../lib/staff/exp');

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	});
	router.get('/save', function(req, res, next) {
	  res.send(exp.save());
	});
	router.get('/demo', function(req, res, next) {
	  res.send(exp.demo);
	});
	module.exports = router;
