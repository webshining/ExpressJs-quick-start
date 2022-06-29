# <p align="center">Express JS Template</p>
## Technologies used:
* Express JS
* Sequelize
* PostgreSQL
* SQLite
* Docker and docker compose

## Getting started
```bash
$ git clone https://github.com/webshining/expressjs.template project_name
$ cd project_name
$ cp .env.ren .env
$ npm install
$ npm start
```
## Docker
### Build
```bash
$ docker-compose up -d
```
### Custom network name
>If you want to use a custom network name, create a network

`docker network create network_name`

>And paste 
```
networks:
    default:
        name: web_host
        external: true
```
>at the end of the docker-compose.yml file, and replace network_name with your own name. 
### Environment variables config
`PORT` - The port on which the server will run

`DB_NAME` - Database name(default: database)

`DB_USER` - Database username(required for PostgreSQL)

`DB_PASS` - Database password(required for PostgreSQL)

`DB_HOST` - Database host(required for PostgreSQL)

`DB_PORT` - Database port(required for PostgreSQL)