var request  = require('./request');
var stripe   = require('./stripe');
var elements = require('./elements');

var form           = document.getElementById('form');
var teamSection    = document.querySelector('.team');
var paymentSection = document.querySelector('.payment');

// Show label only if placeholder is not shown
elements.all('[placeholder]').forEach(function(input) {
  input.addEventListener('keyup', function(e) {
    input.parentNode.querySelector('span').style.visibility = input.value ? 'visible' : 'hidden';
  })
});

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if( paymentSection.className.indexOf('show') == -1 ) {
    teamSection.className += ' hide';
    return paymentSection.className += ' show';
  }

  var team = {
    name: form.name.value,
    email: form.email.value,
    members: form.members.value,
    description: form.description.value
  }

  if( form.card_number.value || form.expiration_month.value || form.expiration_year.value || form.cvc.value ) {
    stripe.getCardToken(form.card_number.value, form.expiration_month.value, form.expiration_year.value, form.cvc.value, function(err, stripeResponse) {
      if( err ) { console.error("Error"); return alert("Sorry, something went wrong."); }

      team.stripe_token = stripeResponse.id;

      request('POST', '/registrations', { team: team }, function yes(body) {
        console.log("Got response", body);
      }, function no(status, body, err) {
        console.error("Request failed", status, body, err);
      });
    });
  } else {
    request('POST', '/registrations', { team: team }, function yes(body) {
      console.log("Got response", body);
    }, function no(status, body, err) {
      console.error("Request failed", status, body, err);
    });
  }

  return false;
});
