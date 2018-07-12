var express = require('express');
var router = express.Router();
var request = require('request');

function getTicker(req, res) {

  request(`https://www.bitstamp.net/api/v2/ticker/${req.params.currencyPair}`, { json: true }, (err, response, body) => {

    if (response.statusCode !== 200) {
      return res.status(response.statusCode)
        .send({ error: { message: 'There was an error calling Bitstamp' }});
    }

    res.send(body);
  });
}

router.get('/ticker/:currencyPair', getTicker);

module.exports = router;
