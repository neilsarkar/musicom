module.exports = {
  all: all
}

function all(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector));
}
