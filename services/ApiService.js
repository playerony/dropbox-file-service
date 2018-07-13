var access_token = "2BELYuHhXVAAAAAAAAAACNyvphd1NNAAY9J5PGc_e7p-Tx4gkiAvNAOBCU8CGf7u";
const dfs = require('dropbox-fs')({ apiKey: access_token });
var responses = require('../utils/responses');

exports.readdir = (req, callback) => {
  var path = req.body.path;

  dfs.readdir(path, (err, result) => {
    if(err)
      callback(responses.failure(err.message));
    else
      callback(responses.success(result));
  })
}

exports.mkdir = (req, callback) => {
  var path = req.body.path;

  dfs.mkdir(path, (err, stat) => {
    if(err)
      callback(responses.failure(err.message));
    else
      callback(responses.success(stat));
  })
}

exports.rmdir = (req, callback) => {
  var path = req.body.path;

  dfs.rmdir(path, err => {
    if(err)
      callback(responses.failure(err.message));
    else
      callback(responses.success('Deleted!'));
  })
}

exports.readFile = (req, callback) => {
  var path = req.body.path;

  dfs.readFile(path, (err, result) => {
    if(err)
      callback(responses.failure(err.message));
    else
      callback(responses.success(result));
  })
}

exports.writeFile = (req, callback) => {
  var path = req.body.path;
  var content = req.body.content;

  dfs.writeFile(path, content, (err, stat) => {
    if(err)
      callback(responses.failure(err.message));
    else
      callback(responses.success(stat));
  })
}

exports.stat = (req, callback) => {
  var path = req.body.path;

  dfs.stat(path, (err, stat) => {
    if(err)
      callback(responses.failure(err.message));
    else
      callback(responses.success(stat));
  })
}

exports.unlink = (req, callback) => {
  var path = req.body.path;

  dfs.unlink(path, err => {
    if(err)
      callback(responses.failure(err.message));
    else
      callback(responses.success('Deleted!'));
  })
}