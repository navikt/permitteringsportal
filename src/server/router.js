const { getHtmlWithDecorator } = require('./decorator-utils')
const express = require('express');
const app = express.Router();
const path = require('path');

const buildPath = path.join(__dirname, '../../build');

const getRouter = () => {

    app.get('/permitteringsportal/internal/isAlive', (req, res) => res.sendStatus(200));
    app.get('/permitteringsportal/internal/isReady', (req, res) => res.sendStatus(200));

    app.use('/permitteringsportal', express.static(buildPath, { index: false }));
    app.get('/', (req, res) => {
        res.redirect(301, '/permitteringsportal');
    });

    app.get('/permitteringsportal/*', async (req, res) => {
        try {
            res.send(await getHtmlWithDecorator(buildPath + '/index.html'));
        } catch (e) {
            console.error(e);
            console.warn(
                'Kunne ikke hente dekoratør (header/footer). Appen serves uten dekoratør.'
            );
            res.sendFile(buildPath + '/index.html');
        }
    });

    return app;
}

module.exports = { getRouter };
