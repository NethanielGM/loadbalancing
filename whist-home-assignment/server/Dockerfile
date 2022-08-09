FROM  --platform=linux/amd64 node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
CMD [ "npm", "start" ]