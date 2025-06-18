import express from 'express'

const app = express()

app.get('', (req, res) => {
    res.send('Hello express')
})

app.get('/help', (req, res) => {
    res.send('help page')
})

app.get('/about', (req, res) => {
    res.send('about the website')
})

app.get('/weather', (req, res) => {
    res.send('showing weather')
})

app.listen(3000, () => {
    console.log('Server is up on server 3000')
})