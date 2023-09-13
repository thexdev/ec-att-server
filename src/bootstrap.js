const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const features = require('./features');

function getInstance() {
  return (
    app
      // .use(bodyParser.urlencoded({ extended: false }))
      .use(bodyParser.json())
      .use(cors())
  );
}

function init(cb = () => null) {
  const app = getInstance();

  for (feature of features) {
    app.use(`/${feature.name}`, feature.register());
  }

  app.listen(process.env.APP_PORT, cb);
}

module.exports = { init, getInstance };
