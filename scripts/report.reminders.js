const chalk = require("chalk")
const shell = require("shelljs")
const notice = require("./notice.js")

let message = "Building reminders (@TODO/@FIXME) report\n"
message += chalk.yellow("./reports/reminders/index.html")
notice(message)

shell.exec("./node_modules/.bin/leasot --exit-nicely --reporter markdown --ignore node_modules ./**/*.ts | ./node_modules/.bin/marked -s > ./reports/reminders/index.html")
