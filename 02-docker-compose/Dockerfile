FROM node:14

WORKDIR /app

COPY package.json ./

RUN npm i --production

COPY src ./src

CMD ["node", "src/server.js"]
