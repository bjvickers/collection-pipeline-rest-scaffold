const error = require("./error.js")

let message = "Please format git commits correctly.\n"
message += "Style guide here: https://www.conventionalcommits.org"

error(message)
process.exit(1)
