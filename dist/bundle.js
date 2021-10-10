/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable prefer-const */\n\n/* eslint-disable no-plusplus */\n\n/* eslint-disable no-undef */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable func-names */\n// import './styles/style.scss';\nvar XMLHttpRequest = __webpack_require__(/*! xhr2 */ \"./node_modules/xhr2/lib/browser.js\");\n\nvar btn = document.getElementById('btn');\nvar fav = document.getElementsByClassName('fav');\n\nfunction buildTable(data) {\n  var table = document.getElementById('myTable');\n\n  for (var i = 0; i < data.length - 2; i++) {\n    var row = \"<tr>\\n                        <td>\".concat(data[i], \"</td>\\n                        <td class=\\\"fct\\\">\").concat(data[i + 1], \"</td>\\n                        <td>\").concat(data[i + 2], \"</td>\\n                        <td><button class=\\\"fav\\\" type=\\\"button\\\">Favorit</button></td>\\n                  </tr>\");\n    table.innerHTML += row;\n  }\n}\n\nfunction chucknorris() {\n  var send = null;\n  var data = null; // eslint-disable-next-line prefer-const\n\n  var myArray = [];\n  var xhr = new XMLHttpRequest();\n  xhr.addEventListener('readystatechange', function () {\n    if (this.readyState === this.DONE) {\n      data = JSON.parse(this.responseText);\n      myArray.push(data.data.cat, data.data.fact, data.data.hits);\n      buildTable(myArray);\n      console.log(data.data.cat);\n      console.log(myArray);\n    }\n  });\n  xhr.open('GET', 'https://asli-fun-fact-api.herokuapp.com/');\n  xhr.send(send);\n}\n\nfunction removeFromWishlist(button) {\n  button.closest('li').remove();\n}\n\nfunction addtoWishlist(button) {\n  var parentItem = button.closest('tr');\n  console.log(parentItem);\n  var clonedItem = parentListItem.cloneNode(true);\n  var batn = clonedItem.getElementsByTagName('button')[0];\n  batn.textContent = 'x';\n  batn.addEventListener('click', function () {\n    removeFromWishlist(this);\n  });\n  document.getElementById('wishlist').append(clonedItem);\n}\n\nbtn.addEventListener('click', chucknorris);\nfav.addEventListener('click', addtoWishlist(this));\n\n//# sourceURL=webpack://einzelabgabe/./src/js/index.js?");

/***/ }),

/***/ "./node_modules/xhr2/lib/browser.js":
/*!******************************************!*\
  !*** ./node_modules/xhr2/lib/browser.js ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = XMLHttpRequest;\n\n\n//# sourceURL=webpack://einzelabgabe/./node_modules/xhr2/lib/browser.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;