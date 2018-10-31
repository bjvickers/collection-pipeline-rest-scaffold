"use strict"

const execa = require('execa')
const Listr = require('listr')
const displayTaskError = require('./notice.taskerror.js')

const tasks = new Listr([
  {
    title: 'Transpiling TypeScript to JavaScript',
    task: async () => {
      await execa("rm", ["-rf", "dist"])
      await execa("mkdir", ["-v", "dist"])
      await execa("./node_modules/.bin/tsc", [])
    }
  }
])

tasks.run().catch(err => {
  displayTaskError(err.message.trim())
  process.exit(1)
})
