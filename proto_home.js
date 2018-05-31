const fsLib = require('fs');
const protobuf = require('protobufjs');

const messages = new protobuf.Root();
const PROTO_HOME = process.env.PROTO_CLI_HOME || process.cwd();

module.exports = {
  messages,
  PROTO_HOME,
};

// TODO: recurse
fsLib
  .readdirSync(PROTO_HOME)
  .filter(filename=>filename.endsWith('.proto'))
  .forEach(filename=> {
    messages.loadSync(filename);
  });