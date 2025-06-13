import request from 'request'

const url = 'https://api.weatherstack.com/current?access_key=17a911fce50765313671cede79dba549&query=Kyiv'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})

