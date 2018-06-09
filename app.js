const request = require('request')

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=mall%20of%20asia%202',
  json: true
}, (err, response, body) => {
  console.log(body)
})