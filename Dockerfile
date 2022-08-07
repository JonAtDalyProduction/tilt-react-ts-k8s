FROM node:16.16-buster as base

# Default value; will be overridden by build_args, if passed
ARG node_env=production

ENV NODE_ENV $node_env

WORKDIR /app

ADD app/package.json .
ADD app/yarn.lock .
RUN yarn install

ADD app/ .

CMD [ "yarn", "dev" ]