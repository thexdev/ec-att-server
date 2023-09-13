const attendanceSubmissionModule = require('./modules/attendace-submission/attendance-submission.module');
const authModule = require('./modules/auth/auth.module');

module.exports = [authModule, attendanceSubmissionModule];
