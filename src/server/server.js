const express = require('express');
const app = express();

const startServer = () => {

    app.get('/permitteringsportal/internal/isAlive', (req, res) => res.sendStatus(200));
    app.get('/permitteringsportal/internal/isReady', (req, res) => res.sendStatus(200));

    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
}

startServer();
