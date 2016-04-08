'use strict';

const fs = require('fs');
const ursa = require('ursa');
const untildify = require('untildify');

module.exports = function decrypt(options) {

  const keyPath = untildify(options.key || '~/.ssh/id_rsa');
  fs.readFile(keyPath, (err, data) => {
    const key = ursa.coercePrivateKey(data);
    const message = key.decrypt(options.message, 'base64', 'utf8');
    process.stdout.write(message);
  });
};
