"use strict"

const execa = require('execa')
const Listr = require('listr')
const displayTaskError = require('./notice.taskerror.js')
 
const tasks = new Listr([
  {
    title: 'Checking code style (linting and secure coding practices)',
    task: () => execa('npm', ['run', 'qc:check:code-style'])
  },
  {
    title: 'Checking credential leakage',
    task: () => execa('npm', ['run', 'qc:check:credential-leaks'])
  },
  {
    title: 'Checking for unused packages',
    task: () => execa('npm', ['run', 'qc:check:unused-packages'])
  }
])
 
tasks.run().catch(err => {
  displayTaskError(err.message.trim())
  process.exit(1)
})
