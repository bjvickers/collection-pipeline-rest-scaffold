"use strict"

const execa = require('execa')
const Listr = require('listr')
const displayTaskError = require('./notice.taskerror.js')

const tasks = new Listr([
  {
    title: 'Copying static assets to dist/',
    task: async () => {
      await execa("mkdir", ["-vp", "dist/api/spec"])
      await execa("cp", ["-R", "src/api/spec/api.yaml", "dist/api/spec/api.yaml"])
    }
  }
])

tasks.run().catch(err => {
  displayTaskError(err.message.trim())
  process.exit(1)
})

