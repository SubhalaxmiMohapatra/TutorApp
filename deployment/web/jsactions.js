define(["@babel/runtime/helpers/asyncToGenerator","@babel/runtime/regenerator","big.js"], function(__WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_asyncToGenerator__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_regenerator__, __WEBPACK_EXTERNAL_MODULE_big_js__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"jsactions": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/subhalaxmi mohapatra/Documents/Mendix/ExcelImporter/Online_Reading_App-main/deployment/tmp/jsactions.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/subhalaxmi mohapatra/Documents/Mendix/ExcelImporter/Online_Reading_App-main/deployment/tmp/jsactions.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/subhalaxmi mohapatra/Documents/Mendix/ExcelImporter/Online_Reading_App-main/deployment/tmp/jsactions.js ***!
  \************************************************************************************************************************/
/*! exports provided: MyFirstModule$disable_login_enable_logout, MyFirstModule$enable_login_disable_logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFirstModule$disable_login_enable_logout", function() { return MyFirstModule$disable_login_enable_logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFirstModule$enable_login_disable_logout", function() { return MyFirstModule$enable_login_disable_logout; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


var MyFirstModule$disable_login_enable_logout = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! C:/Users/subhalaxmi mohapatra/Documents/Mendix/ExcelImporter/Online_Reading_App-main/javascriptsource/myfirstmodule/actions/disable_login_enable_logout */ "../../../../../../Users/subhalaxmi mohapatra/Documents/Mendix/ExcelImporter/Online_Reading_App-main/javascriptsource/myfirstmodule/actions/disable_login_enable_logout.js"));

          case 2:
            return _context.abrupt("return", _context.sent.disable_login_enable_logout);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function MyFirstModule$disable_login_enable_logout() {
    return _ref.apply(this, arguments);
  };
}();
var MyFirstModule$enable_login_disable_logout = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! C:/Users/subhalaxmi mohapatra/Documents/Mendix/ExcelImporter/Online_Reading_App-main/javascriptsource/myfirstmodule/actions/enable_login_disable_logout */ "../../../../../../Users/subhalaxmi mohapatra/Documents/Mendix/ExcelImporter/Online_Reading_App-main/javascriptsource/myfirstmodule/actions/enable_login_disable_logout.js"));

          case 2:
            return _context2.abrupt("return", _context2.sent.enable_login_disable_logout);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function MyFirstModule$enable_login_disable_logout() {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "../../../../../../Users/subhalaxmi mohapatra/Documents/Mendix/ExcelImporter/Online_Reading_App-main/javascriptsource/myfirstmodule/actions/disable_login_enable_logout.js":
/*!******************************************************************************************************************************************************************!*\
  !*** C:/Users/subhalaxmi mohapatra/Documents/Mendix/ExcelImporter/Online_Reading_App-main/javascriptsource/myfirstmodule/actions/disable_login_enable_logout.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: disable_login_enable_logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable_login_enable_logout", function() { return disable_login_enable_logout; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_2__);


// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
 // BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<void>}
 */

function disable_login_enable_logout() {
  return _disable_login_enable_logout.apply(this, arguments);
}

function _disable_login_enable_logout() {
  _disable_login_enable_logout = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var logoutElem, loginElem;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // BEGIN USER CODE
            // Here login is disabled and logout is enabled.
            logoutElem = document.getElementsByClassName("logout")[0];
            logoutElem.setAttribute("Style", "pointer-events:auto;");
            loginElem = document.getElementsByClassName("login")[0];
            loginElem.setAttribute("Style", "pointer-events:none;"); // END USER CODE

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _disable_login_enable_logout.apply(this, arguments);
}

/***/ }),

/***/ "../../../../../../Users/subhalaxmi mohapatra/Documents/Mendix/ExcelImporter/Online_Reading_App-main/javascriptsource/myfirstmodule/actions/enable_login_disable_logout.js":
/*!******************************************************************************************************************************************************************!*\
  !*** C:/Users/subhalaxmi mohapatra/Documents/Mendix/ExcelImporter/Online_Reading_App-main/javascriptsource/myfirstmodule/actions/enable_login_disable_logout.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: enable_login_disable_logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enable_login_disable_logout", function() { return enable_login_disable_logout; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_2__);


// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
 // BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<void>}
 */

function enable_login_disable_logout() {
  return _enable_login_disable_logout.apply(this, arguments);
}

function _enable_login_disable_logout() {
  _enable_login_disable_logout = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var logoutElem, loginElem;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // BEGIN USER CODE
            // Here login is enabled and logout is disabled.
            logoutElem = document.getElementsByClassName("logout")[0];
            logoutElem.setAttribute("Style", "pointer-events:none;");
            loginElem = document.getElementsByClassName("login")[0];
            loginElem.setAttribute("Style", "pointer-events:auto;"); // END USER CODE

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _enable_login_disable_logout.apply(this, arguments);
}

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_asyncToGenerator__;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_regenerator__;

/***/ }),

/***/ "big.js":
/*!*************************!*\
  !*** external "big.js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_big_js__;

/***/ })

/******/ })});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3N1YmhhbGF4bWkgbW9oYXBhdHJhL0RvY3VtZW50cy9NZW5kaXgvRXhjZWxJbXBvcnRlci9PbmxpbmVfUmVhZGluZ19BcHAtbWFpbi9kZXBsb3ltZW50L3RtcC9qc2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3N1YmhhbGF4bWkgbW9oYXBhdHJhL0RvY3VtZW50cy9NZW5kaXgvRXhjZWxJbXBvcnRlci9PbmxpbmVfUmVhZGluZ19BcHAtbWFpbi9qYXZhc2NyaXB0c291cmNlL215Zmlyc3Rtb2R1bGUvYWN0aW9ucy9kaXNhYmxlX2xvZ2luX2VuYWJsZV9sb2dvdXQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3N1YmhhbGF4bWkgbW9oYXBhdHJhL0RvY3VtZW50cy9NZW5kaXgvRXhjZWxJbXBvcnRlci9PbmxpbmVfUmVhZGluZ19BcHAtbWFpbi9qYXZhc2NyaXB0c291cmNlL215Zmlyc3Rtb2R1bGUvYWN0aW9ucy9lbmFibGVfbG9naW5fZGlzYWJsZV9sb2dvdXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiaWcuanNcIiJdLCJuYW1lcyI6WyJNeUZpcnN0TW9kdWxlJGRpc2FibGVfbG9naW5fZW5hYmxlX2xvZ291dCIsImRpc2FibGVfbG9naW5fZW5hYmxlX2xvZ291dCIsIk15Rmlyc3RNb2R1bGUkZW5hYmxlX2xvZ2luX2Rpc2FibGVfbG9nb3V0IiwiZW5hYmxlX2xvZ2luX2Rpc2FibGVfbG9nb3V0IiwibG9nb3V0RWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImxvZ2luRWxl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aEMsRUFBMEMsQ0FBMUMsQ0FIWDtBQUlORixzQkFBVSxDQUFDRyxZQUFYLENBQXdCLE9BQXhCLEVBQWtDLHNCQUFsQztBQUVJQyxxQkFORSxHQU1VSCxRQUFRLENBQUNDLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLENBTlY7QUFPTkUscUJBQVMsQ0FBQ0QsWUFBVixDQUF1QixPQUF2QixFQUFpQyxzQkFBakMsRUFQTSxDQVNOOztBQVRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7QUNmUCxxRjs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJqc2FjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImpzYWN0aW9uc1wiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0Ly8gU2luY2UgYWxsIHJlZmVyZW5jZWQgY2h1bmtzIGFyZSBhbHJlYWR5IGluY2x1ZGVkXG4gXHQvLyBpbiB0aGlzIGZpbGUsIHRoaXMgZnVuY3Rpb24gaXMgZW1wdHkgaGVyZS5cbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoKSB7XG4gXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvc3ViaGFsYXhtaSBtb2hhcGF0cmEvRG9jdW1lbnRzL01lbmRpeC9FeGNlbEltcG9ydGVyL09ubGluZV9SZWFkaW5nX0FwcC1tYWluL2RlcGxveW1lbnQvdG1wL2pzYWN0aW9ucy5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBNeUZpcnN0TW9kdWxlJGRpc2FibGVfbG9naW5fZW5hYmxlX2xvZ291dCA9IGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCJDOi9Vc2Vycy9zdWJoYWxheG1pIG1vaGFwYXRyYS9Eb2N1bWVudHMvTWVuZGl4L0V4Y2VsSW1wb3J0ZXIvT25saW5lX1JlYWRpbmdfQXBwLW1haW4vamF2YXNjcmlwdHNvdXJjZS9teWZpcnN0bW9kdWxlL2FjdGlvbnMvZGlzYWJsZV9sb2dpbl9lbmFibGVfbG9nb3V0XCIpKS5kaXNhYmxlX2xvZ2luX2VuYWJsZV9sb2dvdXQ7XG5leHBvcnQgY29uc3QgTXlGaXJzdE1vZHVsZSRlbmFibGVfbG9naW5fZGlzYWJsZV9sb2dvdXQgPSBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiQzovVXNlcnMvc3ViaGFsYXhtaSBtb2hhcGF0cmEvRG9jdW1lbnRzL01lbmRpeC9FeGNlbEltcG9ydGVyL09ubGluZV9SZWFkaW5nX0FwcC1tYWluL2phdmFzY3JpcHRzb3VyY2UvbXlmaXJzdG1vZHVsZS9hY3Rpb25zL2VuYWJsZV9sb2dpbl9kaXNhYmxlX2xvZ291dFwiKSkuZW5hYmxlX2xvZ2luX2Rpc2FibGVfbG9nb3V0O1xuIiwiLy8gVGhpcyBmaWxlIHdhcyBnZW5lcmF0ZWQgYnkgTWVuZGl4IFN0dWRpbyBQcm8uXHJcbi8vXHJcbi8vIFdBUk5JTkc6IE9ubHkgdGhlIGZvbGxvd2luZyBjb2RlIHdpbGwgYmUgcmV0YWluZWQgd2hlbiBhY3Rpb25zIGFyZSByZWdlbmVyYXRlZDpcclxuLy8gLSB0aGUgaW1wb3J0IGxpc3RcclxuLy8gLSB0aGUgY29kZSBiZXR3ZWVuIEJFR0lOIFVTRVIgQ09ERSBhbmQgRU5EIFVTRVIgQ09ERVxyXG4vLyAtIHRoZSBjb2RlIGJldHdlZW4gQkVHSU4gRVhUUkEgQ09ERSBhbmQgRU5EIEVYVFJBIENPREVcclxuLy8gT3RoZXIgY29kZSB5b3Ugd3JpdGUgd2lsbCBiZSBsb3N0IHRoZSBuZXh0IHRpbWUgeW91IGRlcGxveSB0aGUgcHJvamVjdC5cclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5cclxuLy8gQkVHSU4gRVhUUkEgQ09ERVxyXG4vLyBFTkQgRVhUUkEgQ09ERVxyXG5cclxuLyoqXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlLjx2b2lkPn1cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkaXNhYmxlX2xvZ2luX2VuYWJsZV9sb2dvdXQoKSB7XHJcblx0Ly8gQkVHSU4gVVNFUiBDT0RFXHJcblx0Ly8gSGVyZSBsb2dpbiBpcyBkaXNhYmxlZCBhbmQgbG9nb3V0IGlzIGVuYWJsZWQuXHJcblx0dmFyIGxvZ291dEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9nb3V0XCIpWzBdO1xyXG5cdGxvZ291dEVsZW0uc2V0QXR0cmlidXRlKFwiU3R5bGVcIiAsIFwicG9pbnRlci1ldmVudHM6YXV0bztcIik7XHJcblxyXG5cdHZhciBsb2dpbkVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9naW5cIilbMF07XHJcblx0bG9naW5FbGVtLnNldEF0dHJpYnV0ZShcIlN0eWxlXCIgLCBcInBvaW50ZXItZXZlbnRzOm5vbmU7XCIpO1xyXG5cdFx0XHJcblx0Ly8gRU5EIFVTRVIgQ09ERVxyXG59XHJcbiIsIi8vIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkIGJ5IE1lbmRpeCBTdHVkaW8gUHJvLlxyXG4vL1xyXG4vLyBXQVJOSU5HOiBPbmx5IHRoZSBmb2xsb3dpbmcgY29kZSB3aWxsIGJlIHJldGFpbmVkIHdoZW4gYWN0aW9ucyBhcmUgcmVnZW5lcmF0ZWQ6XHJcbi8vIC0gdGhlIGltcG9ydCBsaXN0XHJcbi8vIC0gdGhlIGNvZGUgYmV0d2VlbiBCRUdJTiBVU0VSIENPREUgYW5kIEVORCBVU0VSIENPREVcclxuLy8gLSB0aGUgY29kZSBiZXR3ZWVuIEJFR0lOIEVYVFJBIENPREUgYW5kIEVORCBFWFRSQSBDT0RFXHJcbi8vIE90aGVyIGNvZGUgeW91IHdyaXRlIHdpbGwgYmUgbG9zdCB0aGUgbmV4dCB0aW1lIHlvdSBkZXBsb3kgdGhlIHByb2plY3QuXHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuXHJcbi8vIEJFR0lOIEVYVFJBIENPREVcclxuLy8gRU5EIEVYVFJBIENPREVcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZS48dm9pZD59XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5hYmxlX2xvZ2luX2Rpc2FibGVfbG9nb3V0KCkge1xyXG5cdC8vIEJFR0lOIFVTRVIgQ09ERVxyXG5cdC8vIEhlcmUgbG9naW4gaXMgZW5hYmxlZCBhbmQgbG9nb3V0IGlzIGRpc2FibGVkLlxyXG5cdHZhciBsb2dvdXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvZ291dFwiKVswXTtcclxuXHRsb2dvdXRFbGVtLnNldEF0dHJpYnV0ZShcIlN0eWxlXCIgLCBcInBvaW50ZXItZXZlbnRzOm5vbmU7XCIpO1xyXG5cclxuXHR2YXIgbG9naW5FbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvZ2luXCIpWzBdO1xyXG5cdGxvZ2luRWxlbS5zZXRBdHRyaWJ1dGUoXCJTdHlsZVwiICwgXCJwb2ludGVyLWV2ZW50czphdXRvO1wiKTtcclxuXHJcblx0Ly8gRU5EIFVTRVIgQ09ERVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYmFiZWxfcnVudGltZV9oZWxwZXJzX2FzeW5jVG9HZW5lcmF0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2JhYmVsX3J1bnRpbWVfcmVnZW5lcmF0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmlnX2pzX187Il0sInNvdXJjZVJvb3QiOiIifQ==