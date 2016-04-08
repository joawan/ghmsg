'use strict';

const fs = require('fs');
const ursa = require('ursa');

module.exports = function decrypt(options) {
  fs.readFile(options.key, (err, data) => {
    const key = ursa.coercePrivateKey(data);
    const message = key.decrypt(options.message, 'base64', 'utf8');
    process.stdout.write(message);
  });
};
