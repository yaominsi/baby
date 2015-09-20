	var express = require('express');
	var router = express.Router();
	var emptyTime = require('../../lib/staff/empty-time');

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	});
	router.get('/save', function(req, res, next) {
	  res.send(emptyTime.save());
	});
	router.get('/demo', function(req, res, next) {
	  res.send(emptyTime.demo);
	});
	module.exports = router;
