const proxy = require('express-http-proxy');
const { BACKEND_BASEURL, BACKEND_API_PATH } = require('./konstanter');
const { exchangeToken, ensureAuthenticated } = require('./tokenUtils');

const apiProxy = (app, tokenXClient, tokenXIssuer) => {
    app.use(
        '/permitteringsportal/api',
        ensureAuthenticated,
        proxy(`${BACKEND_BASEURL}`, {
            proxyReqPathResolver: (req) => {
                console.log(`Proxyar request til ${BACKEND_API_PATH}${req.url}`)
                return `${BACKEND_API_PATH}${req.url}`;
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
