	var express = require('express');
	var router = express.Router();
	var base = require('../../lib/staff/base');

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	});
	router.get('/save', function(req, res, next) {
	  res.send(base.save());
	});
	router.get('/demo', function(req, res, next) {
	  res.send(base.demo);
	});
	module.exports = router;
