const getRouter = require('./router')
const express = require('express');
const app = express();

const startServer = () => {s

    const router = getRouter();
    app.use('/', router)
    
    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
}

startServer();
