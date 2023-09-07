FROM node:18-alpine
RUN mkdir -p ./appTest
COPY copy ./api-test/app/* ./appTest
WORKDIR ./appTest
RUN npm install
CMD node api-test\app\api\index.js