'use strict';

const GithubAPI = require('github');
const ursa = require('ursa');

let gh = new GithubAPI({
  version: '3.0.0',
  timeout: 5000,
  headers: {
    'user-agent': 'ghmsg-app',
  },
});

module.exports = function encrypt(user, options, cb) {
  gh = options.github || gh;
  gh.user.getKeysFromUser({ user }, (err, res) => {
    const sshKey = res.shift().key;
    const key = ursa.openSshPublicKey(sshKey);
    const encrypted = key.encrypt(new Buffer(options.message), 'utf8', 'base64');
    cb(null, encrypted);
  });
};
