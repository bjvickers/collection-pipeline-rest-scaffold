const chalk = require("chalk")
const shell = require("shelljs")
const notice = require("./notice.js")

let message = "Building flame-graph report for /api/v1/register\n"
message += chalk.yellow("./reports/flamegraph/api-v1-register/index.html")
notice(message)

shell.rm("-rf", "./reports/flamegraph/api-v1-register/*")
shell.exec("./node_modules/.bin/clinic flame --on-port './node_modules/.bin/loadtest http://127.0.0.1:3000/api/v1/register -t 10 -n 100 -m POST -H Content-type:application/json -H Accept:application/json -P \"{\"email\":\"test@test.com\", \"firstName\": \"Test\", \"lastName\": \"Testt\"}\"' -- node ./src/bin/start.js > /dev/null 2>&1")
shell.mv("./*clinic-flame*", "./reports/flamegraph/api-v1-register/")
shell.mv("./reports/flamegraph/api-v1-register/*.html", "./reports/flamegraph/api-v1-register/index.html")
