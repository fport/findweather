const https = require("https");
const yargs = require("yargs");
const findCapitalWeather = require("./weather.js");



function calistir() {
  yargs.command({
    command: "find",
    describe: "You get the information of the country entered",
    builder: {
      country: {
        describe: "Write the name of the country",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      findCapitalWeather(argv.country)
    },
  })
  yargs.parse()
}

calistir()

module.exports = calistir
