import request from 'request'
import { geocode } from './utils/geocode.js'
import { forecast } from './utils/forecast.js'

const location = process.argv[2]

geocode(location, (error, data) => {
    if (!location) {
        return console.log('please enter location')
    }
    else if (error) {
        return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
      })
})

