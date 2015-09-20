	var express = require('express');
	var router = express.Router();
	var contact = require('../../lib/staff/contact');

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	});
	router.get('/save', function(req, res, next) {
	  res.send(contact.save({name:'yaomin.siym',pwd:'pwd'}));
	});
	router.get('/demo', function(req, res, next) {
	  res.send(contact.demo);
	});
	module.exports = router;
