const chalk = require("chalk")
const shell = require("shelljs")
const notice = require("./error.js")

let message = "Building code coverage report: "
message += chalk.yellow("./reports/coverage/index.html")
notice(message)

shell.exec("./node_modules/.bin/nyc npm run test:feature")
