const {getRouter} = require('./router')
const express = require('express');
const { Issuer } = require('openid-client');
const app = express();
const { TOKEN_X_WELL_KNOWN_URL, TOKEN_X_CLIENT_ID, TOKEN_X_PRIVATE_JWK } = require('./konstanter');

let tokenXIssuer = null;

const getConfiguredTokenXClient = async () => {
    const issuer = await Issuer.discover(TOKEN_X_WELL_KNOWN_URL);
    console.log(`Discovered issuer ${issuer.issuer}`);
    tokenXIssuer = issuer.token_endpoint;
    return new issuer.Client(
        {
            client_id: TOKEN_X_CLIENT_ID,
            token_endpoint_auth_method: 'private_key_jwt',
            token_endpoint_auth_signing_alg: 'RS256',
        },
        {
            keys: [TOKEN_X_PRIVATE_JWK],
        }
    );
};


const startServer = async () => {

    const tokenXClient = await getConfiguredTokenXClient();
    
    const router = getRouter(tokenXClient, tokenXIssuer);

    app.use('/', router)
    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
}

startServer();
