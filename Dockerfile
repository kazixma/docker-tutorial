FROM node:8.12-alpine
COPY package.json package.json
RUN npm install
COPY . .
CMD npm start
EXPOSE 8080