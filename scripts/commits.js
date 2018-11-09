const notice = require("./notice.js")

let message = "Please format git commits correctly.\n"
message += "Style guide here: https://www.conventionalcommits.org"

notice(message)
process.exit(1)
