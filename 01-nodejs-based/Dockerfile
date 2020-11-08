# --network=host 옵션은 VirtualBox 환경인 경우
# docker build --network=host -t mvmaniaz/nodejs ./
# docker run -d -p8080:8080 -v/app/node_modules -v$(pwd):/app --name node mvmaniaz/nodejs 

# 베이스 이미지를 명시
FROM node:14

WORKDIR /app

COPY package.json ./

# 추가적으로 필요한 파일들을 다운로드
RUN npm i --save-prod

COPY src ./src

# 컨테이너 시작시 실행 될 명령어를 명시
CMD ["node", "src/server.js"]
