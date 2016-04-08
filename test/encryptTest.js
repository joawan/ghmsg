'use strict';

const fs = require('fs');
const path = require('path');
const describe = require('mocha').describe;
const it = require('mocha').it;
const encrypt = require('../lib/encrypt');

describe('encrypt', () => {
  it('should encrypt message', (done) => {
    const keyData = [{
      id: 1,
      key: fs.readFileSync(path.join(__dirname, 'assets', 'id_rsa.pub')).toString('utf8'),
    }];
    encrypt('username', {
      message: 'hello',
      github: { user: { getKeysFromUser: (user, cb) => { cb(null, keyData); } } },
    }, (err, res) => {
      if (!err && res) {
        done();
      }
    });
  });
});
