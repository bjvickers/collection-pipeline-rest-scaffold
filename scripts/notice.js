const boxen = require("boxen")


module.exports = (message) => {
  console.log(boxen(
    message, 
    {
      padding: 1,
      margin: 1,
      align: "center", 
      borderStyle: "double",
      borderColor: "magenta"
    }
  ))
}
