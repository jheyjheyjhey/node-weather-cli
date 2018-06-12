const yargs = require("yargs");
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address for getting weather",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geocode.geocodeAddress(argv.address, (err, res) => {
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
