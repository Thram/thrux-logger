'use strict';

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