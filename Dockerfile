FROM node

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 7000

CMD ["node", "index.js"]