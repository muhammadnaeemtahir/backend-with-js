require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT


/**
 * Sends a simple 'Hello World!' message as a string in response to a GET request on the root path ('/').
 *
 * @param {Request} req - The Express request object containing information about the incoming request.
 * @param {Response} res - The Express response object used to send HTTP responses to the client.
 */
app.get('/', (req, res) => {
    res.send('Hello World!');
});

/**
 * Sends an HTML 'Hello World!' message as a string in response to a GET request on the '/h1' path.
 *
 * @param {Request} req - The Express request object containing information about the incoming request.
 * @param {Response} res - The Express response object used to send HTTP responses to the client.
 */
app.get('/h1', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

/**
 * Sends an object containing a 'Hello World!' message, a timestamp, and the current environment (from process.env.NODE_ENV) in response to a GET request on the '/object' path.
 *
 * @param {Request} req - The Express request object containing information about the incoming request.
 * @param {Response} res - The Express response object used to send HTTP responses to the client.
 * @returns {Object} - An object containing the 'Hello World!' message, a timestamp, and the current environment.
 */
app.get('/object', (req, res) => {
    res.send({
        message: 'Hello World!',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})