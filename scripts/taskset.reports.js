"use strict"

const chalk = require('chalk')
const execa = require('execa')
const Listr = require('listr')
const displayTaskError = require('./notice.taskerror.js')
 
const tasks = new Listr([
  {
    title: 'Deleting old reports',
    task: async () => {
      await execa("rm", ["-rf", "reports"])
      await execa("mkdir", ["-v", "reports"])
      await execa("mkdir", ["-v", "reports/complexity"])
      await execa("mkdir", ["-v", "reports/reminders"])
    }
  },
  {
    title: 'Analysing code complexity: ' + chalk.yellow('./reports/complexity/index.html'),
    task: () => execa('npm', ['run', 'qc:report:complexity'])
  },
  {
    title: 'Finding TODO/FIXME annotations: ' + chalk.yellow('./reports/reminders/index.html'),
    task: () => execa('npm', ['run', 'qc:report:reminders'])
  }
])

tasks.run().catch(err => {
  displayTaskError(err.message.trim())
  process.exit(1)
})
