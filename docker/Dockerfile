FROM --platform=linux/amd64 nginx:1.7.1
# FROM nginx:1.7.1

COPY server.crt /etc/nginx/ssl/server.crt
COPY expired.crt /etc/nginx/ssl/expired.crt
COPY server.key /etc/nginx/ssl/server.key

COPY ssl.conf /etc/nginx/conf.d/ssl.conf