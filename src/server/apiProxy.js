const proxy = require('express-http-proxy');
const { BACKEND_BASEURL } = require('./konstanter');
const { exchangeToken, ensureAuthenticated } = require('./tokenUtils');

const apiProxy = (app, tokenXClient, tokenXIssuer) => {
    app.use(
        '/permitteringsportal/api',
        ensureAuthenticated,
        proxy(`${BACKEND_BASEURL}`, {
            proxyReqPathResolver: (req) => {
                return `/permitteringsportal-api/api/${req.url}`;
            },
            proxyReqOptDecorator: (options, req) => {
                return new Promise((resolve, reject) => {
                    exchangeToken(tokenXClient, tokenXIssuer, req).then(
                        (access_token) => {
                            options.headers.Authorization = `Bearer ${access_token}`;
                            resolve(options);
                        },
                        (error) => reject(error)
                    );
                });
            },
        })
    );
};

module.exports = apiProxy;
