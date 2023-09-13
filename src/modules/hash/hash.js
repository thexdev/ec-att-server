const argon2 = require('argon2');

module.exports = { make: argon2.hash, check: argon2.verify };
