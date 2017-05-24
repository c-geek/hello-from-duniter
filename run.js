"use strict"

const co = require('co')
const stack = require('duniter').statics.autoStack([{
  name: 'duniter-hello',
  required: require('./index')
}], __dirname)

co(function*() {
  try {
    yield stack.executeStack(process.argv)
  } catch(e) {
    console.error(e)
  }
  process.exit()
})
