'use strict'

const GithubAPI = require('github');
const ursa = require('ursa')

const gh = new GithubAPI({
  version: '3.0.0',
  timeout: 5000,
  headers: {
    'user-agent': 'ghmsg-app',
  },
});

module.exports = function encrypt(user, options) {
  gh.user.getKeysFromUser({ user }, (err, res) => {
    let key = res.shift().key;
    let pubKey = ursa.openSshPublicKey(key);
    let encrypted = pubKey.encrypt(new Buffer(options.message), 'utf8', 'base64');
    process.stdout.write(encrypted);
  });
};
