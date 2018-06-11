const request = require("request");
const keys = require("../config/key");

const geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address) || "";

  request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${
      keys.GOOGLE_GEOLOCATION_API_KEY
    }`,
      json: true
    },
    (err, response, body) => {
      if (err) {
        callback("ERROR connecting to Server");
      } else if (body.status === "ZERO_RESULTS") {
        callback("Unable to find address");
      } else if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        })        
      }
    }
  )
}

module.exports = {
  geocodeAddress
};