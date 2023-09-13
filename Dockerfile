FROM node:18.17-alpine3.18

RUN apk update && apk add supervisor;

COPY . /home/app

WORKDIR /home/app

RUN npm install

EXPOSE 80

CMD ["/usr/bin/supervisord", "-n", "-c", "/home/app/runtime/supervisord.conf"]