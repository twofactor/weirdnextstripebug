module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/create-payment-intent.js":
/*!********************************************!*\
  !*** ./pages/api/create-payment-intent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(\"sk_test_ovcw5Ie47XBp00qRQCaZTgBN00zWm9ePDa\");\n\nconst calculateOrderAmount = items => {\n  // Replace this constant with a calculation of the order's amount\n  // Calculate the order total on the server to prevent\n  // people from directly manipulating the amount on the client\n  return 1400;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    items\n  } = req.body; // Create a PaymentIntent with the order amount and currency\n\n  const paymentIntent = await stripe.paymentIntents.create({\n    amount: calculateOrderAmount(items),\n    currency: \"usd\"\n  });\n  res.send({\n    clientSecret: paymentIntent.client_secret\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY3JlYXRlLXBheW1lbnQtaW50ZW50LmpzPzg1MWYiXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsImNhbGN1bGF0ZU9yZGVyQW1vdW50IiwiaXRlbXMiLCJyZXEiLCJyZXMiLCJib2R5IiwicGF5bWVudEludGVudCIsInBheW1lbnRJbnRlbnRzIiwiY3JlYXRlIiwiYW1vdW50IiwiY3VycmVuY3kiLCJzZW5kIiwiY2xpZW50U2VjcmV0IiwiY2xpZW50X3NlY3JldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUFQLENBQWtCLDRDQUFsQixDQUFmOztBQUVBLE1BQU1DLG9CQUFvQixHQUFJQyxLQUFELElBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FMRDs7QUFPZSxzRUFBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU07QUFBRUY7QUFBRixNQUFZQyxHQUFHLENBQUNFLElBQXRCLENBRGlDLENBRWpDOztBQUNBLFFBQU1DLGFBQWEsR0FBRyxNQUFNUCxNQUFNLENBQUNRLGNBQVAsQ0FBc0JDLE1BQXRCLENBQTZCO0FBQ3ZEQyxVQUFNLEVBQUVSLG9CQUFvQixDQUFDQyxLQUFELENBRDJCO0FBRXZEUSxZQUFRLEVBQUU7QUFGNkMsR0FBN0IsQ0FBNUI7QUFJQU4sS0FBRyxDQUFDTyxJQUFKLENBQVM7QUFDUEMsZ0JBQVksRUFBRU4sYUFBYSxDQUFDTztBQURyQixHQUFUO0FBR0QsQ0FWRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jcmVhdGUtcGF5bWVudC1pbnRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuY29uc3Qgc3RyaXBlID0gcmVxdWlyZShcInN0cmlwZVwiKShcInNrX3Rlc3Rfb3ZjdzVJZTQ3WEJwMDBxUlFDYVpUZ0JOMDB6V205ZVBEYVwiKTtcblxuY29uc3QgY2FsY3VsYXRlT3JkZXJBbW91bnQgPSAoaXRlbXMpID0+IHtcbiAgLy8gUmVwbGFjZSB0aGlzIGNvbnN0YW50IHdpdGggYSBjYWxjdWxhdGlvbiBvZiB0aGUgb3JkZXIncyBhbW91bnRcbiAgLy8gQ2FsY3VsYXRlIHRoZSBvcmRlciB0b3RhbCBvbiB0aGUgc2VydmVyIHRvIHByZXZlbnRcbiAgLy8gcGVvcGxlIGZyb20gZGlyZWN0bHkgbWFuaXB1bGF0aW5nIHRoZSBhbW91bnQgb24gdGhlIGNsaWVudFxuICByZXR1cm4gMTQwMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IGl0ZW1zIH0gPSByZXEuYm9keTtcbiAgLy8gQ3JlYXRlIGEgUGF5bWVudEludGVudCB3aXRoIHRoZSBvcmRlciBhbW91bnQgYW5kIGN1cnJlbmN5XG4gIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBhd2FpdCBzdHJpcGUucGF5bWVudEludGVudHMuY3JlYXRlKHtcbiAgICBhbW91bnQ6IGNhbGN1bGF0ZU9yZGVyQW1vdW50KGl0ZW1zKSxcbiAgICBjdXJyZW5jeTogXCJ1c2RcIixcbiAgfSk7XG4gIHJlcy5zZW5kKHtcbiAgICBjbGllbnRTZWNyZXQ6IHBheW1lbnRJbnRlbnQuY2xpZW50X3NlY3JldCxcbiAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/create-payment-intent.js\n");

/***/ }),

/***/ 4:
/*!**************************************************!*\
  !*** multi ./pages/api/create-payment-intent.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/david/Development/weirdstripebug/pages/api/create-payment-intent.js */"./pages/api/create-payment-intent.js");


/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIj9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0cmlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///stripe\n");

/***/ })

/******/ });