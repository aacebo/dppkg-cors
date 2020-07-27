var request = require('request'),
    cors = require('cors'),
    express = require('express');

var app = express();

app.get('/:module', cors(), function(req, res){
  var url = "http://registry.npmjs.org/" + req.params.module
  request.get({url:url, json:true}, function(err, resp, body) {
    res.jsonp(body);
  });
});

app.listen(process.env.PORT || 5000);
console.log('poop');