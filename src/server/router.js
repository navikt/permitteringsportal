const { getHtmlWithDecorator } = require('./decorator-utils')
const express = require('express');
const apiProxy = require('./apiProxy')
const app = express.Router();
const path = require('path');

const buildPath = path.join(__dirname, '../../build');

const getRouter = (tokenXClient, tokenXIssuer) => {

    app.get('/permitteringsportal/internal/isAlive', (req, res) => res.sendStatus(200));
    app.get('/permitteringsportal/internal/isReady', (req, res) => res.sendStatus(200));

    app.use('/permitteringsportal', express.static(buildPath, { index: false }));
    app.get('/', (req, res) => {
        res.redirect(301, '/permitteringsportal');
    });
    apiProxy(app, tokenXClient, tokenXIssuer);
    app.get('/permitteringsportal/login-callback', function (req, res) {
        res.redirect('https://loginservice.dev.nav.no/login?redirect=https://permitteringsportal.dev.nav.no/permitteringsportal');
    });

    app.get('/permitteringsportal/logout-callback', function (req, res) {
        res.redirect('https://loginservice.dev.nav.no/slo');
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
