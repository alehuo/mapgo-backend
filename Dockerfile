FROM node:8-slim

WORKDIR /server

COPY . /server

RUN yarn

RUN yarn test

EXPOSE 8081
CMD [ "yarn", "start" ]