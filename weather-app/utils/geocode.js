import request from "request"

export const geocode = (address, callback) => {
    const url = `https://api.api-ninjas.com/v1/geocoding?city=${address}`

    request({ url, headers: {'X-Api-Key': 'BYlSI+tEKe67k/9pKkM9UQ==5ZjYrhvUW5dwfuG8'}, json: true}, (error, {body} = {}) => {
        console.log(body)
        if(error) {
            callback('[geocode] Unable to connect to loction services', undefined)
        } else if (body.error) {
            callback('[geocode] unable to find location. try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body[0].latitude,
                longitude: body[0].longitude,
                location: body[0].name
            })
        }
    })
}