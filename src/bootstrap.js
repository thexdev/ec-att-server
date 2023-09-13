const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const features = require('./features');

const router = express.Router();

function getInstance() {
  return app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json());
}

function init(cb = () => null) {
  const app = getInstance();

  for (feature of features) {
    app.use(`/${feature.name}`, feature.register());
  }

  app.listen(process.env.APP_PORT, cb);
}

module.exports = { init, getInstance };
