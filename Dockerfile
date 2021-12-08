FROM node:16

# install some packages to use electron
RUN apt-get update \
    && apt-get -y install libgtkextra-dev libgconf2-dev libnss3 libasound2 libxtst-dev libxss1 libgtk-3-0

RUN apt-get update \
    && apt-get install -y curl sudo

# 日本語が使えるようにする
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update \
    && apt-get install -y locales
RUN locale-gen ja_JP.UTF-8


# ENV NODE_OPTIONS --openssl-legacy-provider
ENV LANG ja_JP.UTF-8
ENV LC_CTYPE ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8

COPY . /app
RUN yarn install
EXPOSE 3000

# CMD yarn build && yarn start