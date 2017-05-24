"use strict"

const co = require('co')

module.exports = {
  duniter: {
    cli: [{
      name: 'hello-world',
      desc: 'Says hello from \`duniter\` command.',
      onDatabaseExecute: (server, conf, program, params) => co(function*() {
        console.log('Hello from within Duniter!')
      })
    }]
  }
}

