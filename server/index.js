const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.listen(8080, () => {
    console.log('server listening on port 8080');
});