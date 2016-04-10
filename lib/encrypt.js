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

  if (!user) return cb('Provide a username');
  if (!options.message) return cb('Provide a message');

  gh.user.getKeysFromUser({ user }, (err, res) => {
    if (err) return cb('Error fetching key data from github');
    if (!Array.isArray(res)) return cb('User not found');
    if (res.length < 1) return cb('User has no ssh key');

    const sshKey = res.shift().key;
    const key = ursa.openSshPublicKey(sshKey);
    const encrypted = key.encrypt(new Buffer(options.message), 'utf8', 'base64');
    return cb(null, encrypted);
  });
  return true;
};
