import request from 'request'

const url = 'https://api.weatherstack.com/current?access_key=17a911fce50765313671cede79dba549&query=Kyiv'

request({ url: url, json: true}, (error, response) => {
    if (error) {
        console.log('unable to connect to weather service')
    } else if (response.body.error) {
        console.log('unable to find location')
    } else {
        const currentWeather = response.body.current;
        const temperature = currentWeather.temperature;
        const feelsLike = currentWeather.feelslike;
        const weatherDescription = currentWeather.weather_descriptions[0]
        console.log(`It is ${weatherDescription}, it is currently ${temperature} degrees, it feels like ${feelsLike} degrees`);
    }
})

const urlGeocoding = 'https://api.api-ninjas.com/v1/geocoding?city=Kyiv'
request({url: urlGeocoding, headers: {'X-Api-Key': 'BYlSI+tEKe67k/9pKkM9UQ==5ZjYrhvUW5dwfuG8'},
 json: true}, (error, response) => {
    if (error) {
        console.log('unable to connect to weather service')
    } else if (response.body.error) {
        console.log('no matching results')
    } else {
    const data = response.body;
    const city = data[0];
    const latitude = city.latitude;
    const longitude = city.longitude;
    console.log(latitude, longitude)
 }})