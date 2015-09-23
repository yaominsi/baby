	var express = require('express');
	var router = express.Router();
	var certificate = require('../../lib/staff/certificate');

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	});
	router.get('/save', function(req, res, next) {
	  res.send(certificate.save());
	});
	router.get('/demo', function(req, res, next) {
	  res.send(certificate.demo);
	});
	module.exports = router;
