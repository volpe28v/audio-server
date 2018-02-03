const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const serverPort = process.env.PORT || 8080;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/:audioName', (req, res) => {
  const audioName = req.params.audioName;
  if (!audioName) {
    res.status(400).send('Invalid Parameters.');
  }

  console.log(audioName);
  const file = fs.readFileSync(__dirname + '/public/' + audioName, 'binary');
  res.setHeader('Content-Length', file.length);
  res.write(file, 'binary');
  res.end();
});

app.listen(serverPort, () => {
  console.log(`Start api-server. Port is ${serverPort}`);
});
