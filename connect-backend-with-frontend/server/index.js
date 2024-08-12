import 'dotenv/config'
import express from 'express'
const app = express()
const port = process.env.PORT

/**
 * Middleware function to log the HTTP method and URL of each incoming request.
 * @param {Object} req - Express request object containing information about the incoming request.
 * @param {Object} res - Express response object containing information about the outgoing response.
 * @param {Function} next - A callback function to call after the middleware function has executed.
 */
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

/**
 * Handles GET requests to the root path ('/') and sends a 'Hello World!' response.
 * @param {Object} req - Express request object containing information about the incoming request.
 * @param {Object} res - Express response object containing information about the outgoing response.
 */
app.get('/', (req, res) => {
    res.send('Hello World!');
});

/**
 * Handles GET requests to the '/api/jokes' path and sends a list of 5 jokes as a response.
 * @param {Object} req - Express request object containing information about the incoming request.
 * @param {Object} res - Express response object containing information about the outgoing response.
 * @returns {Array} - An array of 5 jokes, each containing an 'id' and a 'joke' property.
 */
app.get('/api/jokes', async (req, res) => {
    const jokes = [
        { id: 1, joke: 'Why did the chicken cross the road?' },
        { id: 2, joke: 'What do you call a fish with no eyes?' },
        { id: 3, joke: 'Why did the scarecrow win an award?' },
        { id: 4, joke: 'Why did the tomato turn red?' },
        { id: 5, joke: 'Why did the pirate lose his nose?' }
    ];

    res.send(jokes);
});

/**
 * Starts the server and listens on the specified port.
 */
 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});