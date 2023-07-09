FROM nginx

RUN rm /var/log/nginx/*
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./conf/nginx-gateway.conf /etc/nginx/nginx.conf

VOLUME /nginx-react-node-server/logs:/var/log/nginx