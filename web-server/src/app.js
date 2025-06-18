import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'cold',
        location: 'Kyiv'
    })
})

app.listen(3000, () => {
    console.log('Server is up on server 3000')
})