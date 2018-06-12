const yargs = require("yargs");
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const defaultAddress = "Bicutan";

const argv = yargs
  .options({
    a: {
      demand: false,
      alias: "address",
      describe: "Address for getting weather",
      string: true
    }
  })
  .help()
  .alias("help", "h")
  .argv;

let address = argv.address || defaultAddress;

geocode.geocodeAddress(address, (err, res) => {
  if (err)
    console.log(err)
  else {
    var address = res.address;
    console.log(`Getting weather data for ${address}`)
    weather.getWeather(res.lat, res.lng, (err, res) => {
      if (err) 
        console.log(err);
      else 
        console.log(`Currently, it's ${res.temperature}°F, but it feels like ${res.apparentTemperature}°F.`);
    });
  }  
});
