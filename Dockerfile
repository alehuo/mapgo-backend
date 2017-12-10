FROM node:8-slim

WORKDIR /server

COPY . /server
RUN npm install

EXPOSE 8081
CMD [ "npm", "start" ]