FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN npm i --production

COPY src ./src

CMD ["npm", "run", "start"]
