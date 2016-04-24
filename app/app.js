document.write('World');

var form = document.getElementById('form');


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

  request('POST', '/cool', { team: team }, function yes(body) {
    console.log("Got response", body);
  }, function no(status, body, err) {
    console.error("Request failed", status, body, err);
  });

  return false;
});


function request(method, url, body, success, failure) {
  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  xmlhttp.open(method.toUpperCase(), url);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  body = body && JSON.stringify(body);
  xmlhttp.onreadystatechange = function() {
    if( xmlhttp.readyState !== XMLHttpRequest.DONE ) { return; }

    if( xmlhttp.status != 200 ) {
      return failure && failure(xmlhttp.status, xmlhttp.responseText, xmlhttp);
    }

    var response = JSON.parse(xmlhttp.responseText);
    return success && success(response);
  }

  xmlhttp.send(body);
}
