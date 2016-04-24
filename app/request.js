module.exports = function request(method, url, body, success, failure) {
  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  xmlhttp.open(method.toUpperCase(), url);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  body = body && JSON.stringify(body);
  xmlhttp.onreadystatechange = function() {
    if( xmlhttp.readyState !== XMLHttpRequest.DONE ) { return; }

    if( xmlhttp.status < 200 || xmlhttp.status > 299 ) {
      return failure && failure(xmlhttp.status, xmlhttp.responseText, xmlhttp);
    }

    var response = xmlhttp.responseText && JSON.parse(xmlhttp.responseText);
    return success && success(response);
  }

  xmlhttp.send(body);
}
