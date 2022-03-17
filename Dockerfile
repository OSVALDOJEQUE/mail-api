FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install

COPY . . 

EXPOSE 3008

CMD ["yarn","dev"]