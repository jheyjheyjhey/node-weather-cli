const request = require("request");
const keys = require("../config/key");

const getWeather = (lat, lng, callback) => {
  request({
      url: `https://api.darksky.net/forecast/${keys.DARK_SKY_API_KEY}/${lat},${lng}`,
      json: true
    },
    (err, response, body) => {
      if (!err && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        })
      } else {
        callback('Error fetching weather')
      }
    }
  )
}

module.exports = {
  getWeather
}