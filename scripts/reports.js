const execa = require('execa')

const clean = async () => {
  await execa("rm", ["-rf", "reports"])
  await execa("mkdir", ["-vp", "reports/complexity"])
  await execa("mkdir", ["-vp", "reports/reminders"])
}

clean()
