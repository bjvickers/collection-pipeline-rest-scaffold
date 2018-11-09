const chalk = require("chalk")
const shell = require("shelljs")
const notice = require("./notice.js")

let message = "Building code complexity report\n"
message += chalk.yellow("./reports/complexity/index.html")
notice(message)

shell.exec("./node_modules/.bin/plato -r -q -e tslint.json -d reports/complexity -x .js.map -x .ts src")
