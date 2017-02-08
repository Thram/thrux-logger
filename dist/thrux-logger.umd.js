(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["thrux-logger"] = factory();
	else
		root["thrux-logger"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by thram on 27/01/17.
 */

var colors = {
  black: 'color: black;',
  red: 'color: crimson;',
  green: 'color: teal;',
  blue: 'color: cornflowerblue;'
},
    fontWeights = {
  bold: 'font-weight: bold;',
  normal: 'font-weight: normal;'
};

var blackTitle = colors.black + ' ' + fontWeights.bold,
    blackText = colors.black + ' ' + fontWeights.normal,
    greenTitle = colors.green + ' ' + fontWeights.bold,
    greenText = colors.green + ' ' + fontWeights.normal,
    redTitle = colors.red + ' ' + fontWeights.bold,
    redText = colors.red + ' ' + fontWeights.normal,
    blueTitle = colors.blue + ' ' + fontWeights.bold,
    blueText = colors.blue + ' ' + fontWeights.normal;

var logger = function logger(_ref) {
  var state = _ref.state,
      action = _ref.action,
      prev = _ref.prev,
      payload = _ref.payload,
      next = _ref.next;

  console[console.group ? 'group' : 'log']('%cState: %c' + state + ' - %cAction: %c' + action + ' - %cTime: %c' + new Date().toISOString(), greenText, greenTitle, blueText, blueTitle, blackText, blackTitle);
  console.log('%cPrevious State:', redTitle, prev);
  console.log('%cPayload:', blackTitle, payload);
  console.log('%cNext State:', blueTitle, next);
  console.group && console.groupEnd();
};

exports.default = logger;

/***/ })
/******/ ]);
});
//# sourceMappingURL=thrux-logger.umd.js.map