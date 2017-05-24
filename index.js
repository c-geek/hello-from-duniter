"use strict"

const co = require('co')
const pjson = require('./package.json')

module.exports = {
  duniter: {
    cli: [{
      name: 'hello-world',
      desc: 'Says hello from \`duniter\` command.',
      logs: false,
      onDatabaseExecute: (server, conf, program, params) => co(function*() {
        console.log('Hello from within Duniter! (v%s)', pjson.version)
      })
    }]
  }
}

