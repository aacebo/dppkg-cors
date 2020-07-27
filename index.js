const request = require('request');
const cors = require('cors');
const express = require('express');

const app = express();

app.get('/:module', cors(), function(req, res){
  const url = `https://registry.npmjs.org/${req.params.module}`;

  request.get({ url: url, json: true }, function(_err, _resp, body) {
    res.jsonp(body);
  });
});

app.listen(process.env.PORT || 3000);