var key = require('./env').stripe.publishable_key;

Stripe.setPublishableKey(key);

module.exports = {
  getCardToken: function(cardNumber, expirationMonth, expirationYear, cvc, cb) {
    Stripe.card.createToken({
      number: cardNumber,
      exp_month: expirationMonth,
      exp_year: expirationYear,
      cvc: cvc
    }, function(status, response) {
      if( status < 200 || status > 299 ) {
        return cb && cb(response);
      }

      cb && cb(null, response);
    });
  }
}
