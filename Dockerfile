FROM node:latest as nodeBase
WORKDIR /app
RUN apt-get update && apt-get install nginx -y
COPY ./package.json /app
RUN npm i
COPY . /app
RUN npm run build
CMD [ "npm","run","start"]




