import request from "request"

export const geocode = (address, callback) => {
    const url = `https://api.api-ninjas.com/v1/geocoding?city=${address}`

    request({ url: url, headers: {'X-Api-Key': 'BYlSI+tEKe67k/9pKkM9UQ==5ZjYrhvUW5dwfuG8'}, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to loction services', undefined)
        } else if (response.body.error) {
            callback('unable to find location. try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body[0].latitude,
                longitude: response.body[0].longitude
            })
        }
    })
}