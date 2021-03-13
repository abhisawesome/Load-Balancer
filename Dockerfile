FROM node:latest
WORKDIR /nginx
RUN apt-get update && apt-get install nginx -y
COPY ./package.json /nginx
RUN npm i
COPY . /nginx
RUN ls && pwd
RUN npm run build
RUN ls && pwd && cd dist && ls && pwd
CMD [ "npm","run","start" ]
