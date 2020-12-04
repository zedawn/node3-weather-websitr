const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8e3e64009501a6a277dac3cc9165e638&query=' + latitude + ',' + longitude
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather server!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                weather_description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                humidity: body.current.humidity
            })
        }
    })
}

module.exports = forecast