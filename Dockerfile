FROM node as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


FROM node as production

WORKDIR /app

COPY package.json .

RUN npm install

COPY --from=build /app/dist .

COPY .env .env

CMD ["node", "index.js"]