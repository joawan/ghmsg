#!/usr/bin/env node

'use strict'

const program = require('commander');
const encrypt = require('./lib/encrypt');
const decrypt = require('./lib/decrypt');
const meta = require('./package.json');

program
  .version(meta.version);

program
  .command('encrypt [user]')
  .description('Encrypt message to user using public ssh key')
  .option('-m, --message <value>', 'Message to send to user')
  .action((user, options) => {
    encrypt(user, options.opts());
  });

program
  .command('decrypt')
  .description('Decrypt message using your private ssh key')
  .option('-m, --message <value>', 'Message to send to user')
  .option('-k, --key [value]', 'Path to private ssh key')
  .action((options) => {
    decrypt(options.opts());
  });

program
  .parse(process.argv);