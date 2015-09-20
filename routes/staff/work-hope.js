	var express = require('express');
	var router = express.Router();
	var workHope = require('../../lib/staff/work-hope');

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	});
	router.get('/save', function(req, res, next) {
	  res.send(workHope.save());
	});
	router.get('/:id', function(req, res, next) {
	  res.send(workHope.get());
	});
	router.get('/demo', function(req, res, next) {
	  res.send(workHope.demo);
	});
	module.exports = router;
