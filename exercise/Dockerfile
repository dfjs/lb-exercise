FROM node:8-alpine
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN npm install -qy
COPY . .
RUN yarn build
