FROM node:latest

RUN npm i -g yarn --force

RUN yarn set version stable

WORKDIR /usr/src/app

COPY . .

RUN yarn config set globalFolder /usr/src/app/.yarn

RUN yarn install

RUN yarn start