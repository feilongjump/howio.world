FROM nginx:stable-alpine-slim

COPY ./howio.world.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443
