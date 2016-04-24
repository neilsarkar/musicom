var form    = document.getElementById('form');
var request = require('./request');
var stripe  = require('./stripe');



form.addEventListener('submit', function(e) {
  e.preventDefault();

  var team = {
    name: form.name.value,
    members: form.members.value,
    coaches: form.coaches.value,
    schools: form.schools.value,
    description: form.description.value,
    links: form.links.value,
  }

  stripe.getCardToken(form.card_number.value, form.expiration_month.value, form.expiration_year.value, form.cvc.value, function(err, stripeResponse) {
    if( err ) { console.error("Error"); return alert("Sorry, something went wrong."); }

    team.stripe_token = stripeResponse.id;

    request('POST', '/registrations', { team: team }, function yes(body) {
      console.log("Got response", body);
    }, function no(status, body, err) {
      console.error("Request failed", status, body, err);
    });
  });

  return false;
});
