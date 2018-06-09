const request = require('request')
const keys = require('./config/key')

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=mall%20of%20asia%202&key=${keys.GOOGLE_GEOLOCATION_API_KEY}`,
  json: true
}, (err, response, body) => {
  console.log(body)
})