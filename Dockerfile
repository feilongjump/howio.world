FROM nginx:stable-alpine-slim

COPY ./howio.world.conf /etc/nginx/conf.d/howio.world.conf

EXPOSE 80 443
