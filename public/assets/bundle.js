/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	__webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "* { box-sizing: border-box; }\n\nbody {\n  font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;\n  padding: 1em;\n  color: #666;\n  /*background-image: url(\"https://s3.amazonaws.com/f.cl.ly/items/0I1G0c2q3j1o2k0c2O2N/920687_1304249762925882_7930568496187212230_o.jpg?v=1ceaf997\");\n  background-size: cover;*/\n}\n\nheader {\n  text-align: center;\n  font-family: 'Indie Flower', cursive;\n  font-size: 50px;\n  line-height: 38px;\n  color: #fff;\n  text-shadow: 0 0 10px blue;\n}\n\nheader small {\n  text-shadow: none;\n  color: blue;\n  font-size: 20px;\n  display: block;\n  margin-top: .5em;\n}\n\nheader small a {\n  text-decoration: underline;\n}\n\nlabel {\n  display: block;\n  font-weight: normal;\n  margin-bottom: .5em;\n}\nlabel span {\n  display: block;\n  color: #919191;\n  margin-bottom: .2em;\n}\ninput {\n  width: 100%;\n}\n.submit {\n  text-align: center;\n}\ninput[type=submit] {\n  width: auto;\n}\ntextarea {\n  width: 100%;\n}\nlabel span {\n  visibility: hidden;\n}\nlabel span.shown {\n  visibility: visible; \n}\nfieldset { border: 0; margin: 0; padding: 0; }\n\nfooter { text-align: right; font-size: 70%; margin-top: 2em; }\n\n.card-details { display: flex; }\n.exp-year     { margin: 0 3em 0 1em; }\n\n.payment {\n  display: none;\n}\n\n.show { display: block; }\n.hide { display: none; }\n\n.submit {\n  margin-top: 1em;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var request  = __webpack_require__(6);
	var stripe   = __webpack_require__(8);
	var elements = __webpack_require__(9);

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


/***/ },
/* 6 */
/***/ function(module, exports) {

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


/***/ },
/* 7 */
/***/ function(module, exports) {

	var environments = {
	  development: {
	    stripe: {
	      publishable_key: 'pk_test_z2DDmGuncmSIKzUrkhuGTuxu'
	    }
	  },
	  production: {
	    stripe: {
	      publishable_key: 'pk_live_DniPSRWT0gFTvi3dchAqQCwK'
	    }
	  }
	}

	module.exports = window.location.href.match(/localhost/) ? environments.development : environments.production;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var key = __webpack_require__(7).stripe.publishable_key;

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


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  all: all
	}

	function all(selector) {
	  return Array.prototype.slice.call(document.querySelectorAll(selector));
	}


/***/ }
/******/ ]);