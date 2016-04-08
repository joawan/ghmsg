'use strict';

const path = require('path');
const describe = require('mocha').describe;
const it = require('mocha').it;
const decrypt = require('../lib/decrypt');

describe('decrypt', () => {
  it('should decrypt message', (done) => {
    decrypt({
      key: path.join(__dirname, 'assets', 'id_rsa'),
      message:
        ['Tn1Hm8cUpEphG1k6++9Pc4YWTy/JSyzxCEVQzf23qj6KEOQlGctmit3CLG4RRM3uLbJpI',
        'kMTTX1q00h2cs5Av55T5ZVEOrEysHMeg4D3X0gnUx/SBhWS9MPmnWdB/MqysenN3rbt/Ch',
        'flt8xXnPAHcmzY+FgoBIX9Bz6SOljph4/SJD5smO//hwUCiLV+puqKptaLzUDPwE0nhYMT',
        'ZsG6Vig9TpZJeTIGTZOojyniR/qwouu7ZHL3oQFDMbSLvTanXKKKeQmgOWXrpAW34OGSsW',
        '0D5rWPkwnsHYA3k92cecsrJG4rcC0YG4WuASmYQKTSq32uYfrLoUXDHiyFh3wBA=='].join(''),
    }, (err, res) => {
      if (!err && res === 'hello') {
        done();
      }
    });
  });
});
