const chalk = require("chalk")
const shell = require("shelljs")
const notice = require("./notice.js")

let message = "Building code coverage report\n"
message += chalk.yellow("./reports/coverage/index.html")
notice(message)

shell.exec("./node_modules/.bin/nyc npm run test:feature")
