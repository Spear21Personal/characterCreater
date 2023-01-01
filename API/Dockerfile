FROM node:16

WORKDIR /usr/app
COPY package*.json ./

RUN npm install 
#RUN npm ci --only=production
 COPY . .

 RUN npm run serve
 COPY ormconfig.json ./build 
 COPY .env ./build 
 WORKDIR ./build

 EXPOSE 4001

 CMD node index.js