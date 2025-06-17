import request from 'request'
import { geocode } from './utils/geocode.js'
import { forecast } from './utils/forecast.js'

const address = process.argv[2]

geocode(address, (error, {latitude, longitude, location} = {}) => {
    if (!address) {
        return console.log('please enter address')
    }
    else if (error) {
        return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
      })
})

