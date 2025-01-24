FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# RUN apk add --no-cache bash coreutils

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
