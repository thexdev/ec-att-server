const router = require('../../router');

const attendaceSubmissionHandler = require('./attendance-submission.handler');

module.exports = {
  name: 'attendance',

  register: () => {
    router.post('/submit', attendaceSubmissionHandler.submit);
    return router;
  },
};
