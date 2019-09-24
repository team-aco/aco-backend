FROM node:carbon

RUN mkdir -p /app

WORKDIR /app

ADD ./ /app

RUN yarn install

ENV NODE_ENV=production

CMD yarn start