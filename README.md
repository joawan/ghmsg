# ghmsg


[![Build Status](https://travis-ci.org/joawan/ghmsg.svg?branch=master)](https://travis-ci.org/joawan/ghmsg)
[![Coverage Status](https://coveralls.io/repos/github/joawan/ghmsg/badge.svg?branch=master)](https://coveralls.io/github/joawan/ghmsg?branch=master)

Command-line interface to encrypt message using github users public ssh keys

## Installation

    $ npm install -g ghmsg

## Usage


#### `encrypt`

Encrypt a message with an user's public ssh key, retrieved from Github.
If user has multiple keys, the first one will be used.

```bash
$ ghmsg encrypt <user> -m <message>

$ ghmsg encrypt joawan -m "hello world"
```

#### `decrypt`

Decrypt a message with your private key, that matches public key on Github.
Defaults to `~/.ssh/id_rsa`.

```bash
$ ghmsg decrypt -m <message> -k <path to key>

$ ghmsg decrypt -m "NK33pIHyNlAwcJ1...0w=="
```

## Why?
You don't want to send passwords and other sensitive data in plain text for
everyone to see.

Why not use [keybase.io](https://keybase.io/)? Keybase is still invite only,
and it is yet another service to set up and configure. This uses your Github
account where you should already have an ssh key.
