# --network=host 옵션은 VirtualBox 환경인 경우
# docker build --network=host -t mvmaniaz/react ./
# docker run -d -p80:80 --name react mvmaniaz/react

FROM node:alpine as builder

WORKDIR /app

COPY package.json ./

RUN npm i --save-prod

COPY src ./src
COPY public ./public

RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
