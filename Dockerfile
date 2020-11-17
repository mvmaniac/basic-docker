# 최종 배포에 쓰일 Dockerfile

FROM node:alpine as builder

WORKDIR /app

COPY ./03-react-based/package.json ./

RUN npm i --save-prod

COPY ./03-react-based/src ./src
COPY ./03-react-based/public ./public

RUN npm run build

FROM nginx
EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html
