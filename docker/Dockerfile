FROM --platform=linux/amd64 nginx

COPY server.crt /etc/nginx/ssl/server.crt
COPY server.key /etc/nginx/ssl/server.key

COPY ssl.conf /etc/nginx/conf.d/ssl.conf