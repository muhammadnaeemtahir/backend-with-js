require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/h1', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/object', (req, res) => {
    res.send({
        message: 'Hello World!',
        timestamp: new Date().toISOString(),

        // env will not be shown in the response
        environment: process.env.NODE_ENV
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})