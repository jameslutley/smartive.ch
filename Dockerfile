FROM alpine:edge
MAINTAINER José Moreira <josemoreiravarzim@gmail.com>
# Forked of from https://hub.docker.com/r/gatsbyjs/gatsby/

EXPOSE 80

ADD nginx-boot.sh /sbin/nginx-boot

ADD public/ /pub

RUN chmod +x /sbin/nginx-boot && \
    apk --update add nginx bash && \
    rm -fR /var/cache/apk/*

CMD [ "/sbin/nginx-boot" ]
