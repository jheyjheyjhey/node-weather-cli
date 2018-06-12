const yargs = require("yargs");
const axios = require('axios');
const keys = require('./config/key');

const defaultAddress = 'Bicutan';

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

let encodedAddress = encodeURIComponent(argv.address || defaultAddress);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${keys.GOOGLE_GEOLOCATION_API_KEY}`;

axios.get(geocodeURL).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find given address');
  }
  var lat = response.data.results[0].geometry.location.lat
  var lng = response.data.results[0].geometry.location.lng
  var weatherURL = `https://api.darksky.net/forecast/${keys.DARK_SKY_API_KEY}/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherURL).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Currently, it's ${temperature}°F, but it feels like ${apparentTemperature}°F.`);
  });
}).catch((err) => {
  throw err;
})