const request = require('request')

// -20.496,-54.607 cg

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/6c73fbf09ade94e1e34c420ad95ba3e6/${latitude},${longitude}?units=si`

    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if( body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It´s currently ${body.currently.temperature} degrees out. This high today ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}.
                     There is a ${body.currently.precipProbability}% chance to rain`)
        }
    })
}

module.exports = forecast