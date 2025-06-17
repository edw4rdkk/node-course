import request from "request";

export const forecast = (latitude, longitude, callback) => {
    const url = `https://api.weatherstack.com/current?access_key=17a911fce50765313671cede79dba549&query= ${latitude},${longitude}`;

    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('[forecast] unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('[forecast] unable to find location', undefined)
        } else {
            const currentWeather = body.current;
            const temperature = currentWeather.temperature;
            const feelsLike = currentWeather.feelslike;
            const weatherDescription = currentWeather.weather_descriptions[0]
            const message = `[forecast] It is ${weatherDescription}, it is currently ${temperature} degrees, it feels like ${feelsLike} degrees`
            callback(undefined, message)
        }
    })

}
