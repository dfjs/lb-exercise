Note: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Notes

## Setup/environment requirements

- yarn / npm
- node 8
- Docker / Docker compose
- IDE: (loosely) uses Flowtype in parts

## Installation / setup

```
$ git clone https://github.com/dfjs/lb-exercise.git

```

### Node / server-side

```
$ npm i -G nodemon
$ npm i
$ DEBUG=server:* npm start

```

### SPA

```
$ cd DIRECTORY
$ yarn install
$ yarn start

```

#### Testing


```
yarn test

```

Note, if you're seeing errors like:

`2018-07-12 10:53 node[6916] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)`

You may need to install `watchman` (e.g. `brew install watchman`).


## TODO / Caveats

### App

- Be more consistent with yarn/npm usage
- Add more typing, whether with Flow, TypeScript or just PropTypes

### Setup

- The SPA uses `fetch`, which isn't yet widely supported enough in browsers to rely on without a polyfill (TODO)
  - https://caniuse.com/#feat=fetch
- Add development/production configuration for relevant builds and development
- More tests / and more configuration to allow finer-grained testing

### Docker / Dev environment

- FIX root-level docker-compose.yml, such that the exercise/build is COPIED to server
- Remove redundancy/duplication between Dockerfiles and docker-composes
- Setup unified Docker-based environments
