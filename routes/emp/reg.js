	var express = require('express');
	var router = express.Router();
	var reg = require('../../lib/emp/reg');

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	});
	router.get('/save', function(req, res, next) {
	  res.send(reg.save({name:'yaomin.siym',pwd:'pwd'}));
	});
	router.get('/:cellPhone', function(req, res, next) {
	  res.send(reg.get({cellPhone:'yaomin.siym',pwd:'pwd'}));
	});
	router.get('/demo', function(req, res, next) {
	  res.send(reg.demo);
	});
	module.exports = router;
