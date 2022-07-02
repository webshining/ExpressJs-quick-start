FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY ./dist .

CMD ["node", "index.js"]