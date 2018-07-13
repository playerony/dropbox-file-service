var express = require('express');
var router = express.Router();
var ApiService = require('../services/ApiService');

router.post('/mkdir', function(req, res, next) {
  ApiService.mkdir(req, response => {
    res.json(response);
  })
});

router.post('/readdir', function(req, res, next) {
  ApiService.readdir(req, response => {
    res.json(response);
  })
});

router.post('/rmdir', function(req, res, next) {
  ApiService.rmdir(req, response => {
    res.json(response);
  })
});

router.post('/readFile', function(req, res, next) {
  ApiService.readFile(req, response => {
    res.json(response);
  })
});

router.post('/writeFile', function(req, res, next) {
  ApiService.writeFile(req, response => {
    res.json(response);
  })
});

router.post('/stat', function(req, res, next) {
  ApiService.stat(req, response => {
    res.json(response);
  })
});

router.post('/unlink', function(req, res, next) {
  ApiService.unlink(req, response => {
    res.json(response);
  })
});

module.exports = router;
