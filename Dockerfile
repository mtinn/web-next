FROM node:17.3.0-alpine

RUN apk add --no-cache git

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH $PATH:./node_modules/.bin

COPY package.json /usr/src/app/

COPY . /usr/src/app

ENV NODE_ENV production

RUN npm install -g -q


CMD [ "npm", "start" ]

EXPOSE 3000
