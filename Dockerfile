FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /data/www
COPY build /data/www
