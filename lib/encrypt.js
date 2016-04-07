const GithubAPI = require('github');

const gh = new GithubAPI({
  version: '3.0.0',
  timeout: 5000,
  headers: {
    'user-agent': 'ghmsg-app',
  },
});

module.exports = function encrypt(user, options) {
  gh.user.getKeysFromUser({ user }, (err, res) => {
    process.stdout.write(res.shift().key, options);
  });
};
