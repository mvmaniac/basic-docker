FROM node:alpine as builder

WORKDIR /app

COPY package.json ./

# 실습 당시에는 --legacy-peer-deps 옵션을 주어야 install이 됨
RUN npm i --production --legacy-peer-deps

COPY src ./src
COPY public ./public

RUN npm run build

FROM nginx
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
