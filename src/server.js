require('dotenv').config();

const bootstrap = require('./bootstrap');

const app = bootstrap.getInstance();

app.get('/', function (_, res) {
  return res.json({ message: 'yes' });
});

bootstrap.init(() => {
  console.log('Server is running on port 80');
});
