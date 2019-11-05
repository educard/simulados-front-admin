FROM node:12

WORKDIR /usr/src/app

ENV API_URL 172.18.0.3:3000

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]