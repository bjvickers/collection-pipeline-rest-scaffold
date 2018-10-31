"use strict"

const chalk = require('chalk')
const execa = require('execa')
const Listr = require('listr')
const displayTaskError = require('./notice.taskerror.js')
 
const tasks = new Listr([
  {
    title: 'Deleting existing quality control reports',
    task: async () => {
      await execa("rm", ["-rf", "reports"])
      await execa("mkdir", ["-vp", "reports/complexity"])
      await execa("mkdir", ["-vp", "reports/reminders"])
    }
  },
  {
    title: 'Building complexity analysis report: ' + chalk.yellow('./reports/complexity/index.html'),
    task: () => execa('npm', ['run', 'qc:report:complexity'])
  },
  {
    title: 'Building TODO/FIXME annotation report: ' + chalk.yellow('./reports/reminders/index.html'),
    task: () => execa('npm', ['run', 'qc:report:reminders'])
  }
])

tasks.run().catch(err => {
  displayTaskError(err.message.trim())
  process.exit(1)
})
