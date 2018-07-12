var express = require('express');
var router = express.Router();
var request = require('request');

function getCurrencyHistory(req, res) {

  request(`https://graphs2.coinmarketcap.com/currencies/${req.params.currency}`, { json: true }, (err, response, body) => {

    if (response.statusCode !== 200) {
      return res.status(response.statusCode)
        .send({ error: { message: 'There was an error calling CoinMarketCap' }});
    }

    res.send(body);
  });
}

router.get('/currency/:currency/history', getCurrencyHistory);

module.exports = router;
