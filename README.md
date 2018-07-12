# LB Exercise

Simple project for viewing some information about Tickers and a currency's history.

# Notes

- The SPA / exercise project is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup/environment requirements

- npm / yarn
- node 8
- Docker / Docker compose
- IDE: (loosely) uses Flowtype in parts


## Quick (dev) start:

Clone repo:
```
$ git clone https://github.com/dfjs/lb-exercise.git

```

Install and start server:

```
$ cd server/
$ npm i
$ npm start

```

See http://localhost:3000/ for API endpoints list.

Install and start client / front-end, in a new terminal:

```
$ cd exercise/
$ yarn
$ yarn start

```

This should open http://localhost:3001/ in your browser.

Now you should be able to make changes in either `server/` or `exercise/`
and see your changes reflected pretty-much immediately.

Note: see some more docs/caveats in each component's README.


## Docker compose status (TODO)

The intent with this was to provide a hybrid setup for a node and SPA delivery, and potentially a development environment too.
However, the copying of the built assets for the SPA weren't copying over unfortunately - TODO.


## TODO / Caveats

### Docker setup

- Finish/fix Docker compose
