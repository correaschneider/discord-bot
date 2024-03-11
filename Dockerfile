FROM node:20.11.1-alpine

RUN npm install -g npm@latest

WORKDIR /bot

CMD [ "node", "app.js" ]