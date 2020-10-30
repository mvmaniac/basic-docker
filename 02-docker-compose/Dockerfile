FROM node:14

WORKDIR /app

COPY package.json ./

RUN npm i --save-prod

COPY src ./src

CMD ["node", "src/server.js"]
