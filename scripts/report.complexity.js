const chalk = require("chalk")
const shell = require("shelljs")
const notice = require("./error.js")

let message = "Building code complexity report: "
message += chalk.yellow("./reports/complexity/index.html")
notice(message)

shell.exec("./node_modules/.bin/plato -r -q -e tslint.json -d reports/complexity -x .js.map -x .ts src")
