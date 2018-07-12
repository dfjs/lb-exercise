# Setup and build the client

FROM node:8-alpine as client

WORKDIR /usr/app
COPY exercise/package*.json ./
RUN yarn
COPY exercise/ ./
RUN npm run-script build


# Setup the server

FROM node:8-alpine

WORKDIR /usr/app/
ADD --from=client /usr/app/build/ ./client/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

ENV PORT 3000

EXPOSE 3000

CMD ["yarn", "build"]
