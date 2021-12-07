FROM navikt/node-express:14

WORKDIR /app
COPY src/server/ src/server/

WORKDIR /app/src/server
ENV NODE_ENV production

EXPOSE 3000
ENTRYPOINT ["node", "server.js"]
