FROM php:8.2.7-fpm-alpine

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql