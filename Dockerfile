FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9090
EXPOSE 8080
RUN npm run build
RUN npm install -g http-server
CMD [ "http-server", "dist" ]
