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
};
var fontWeights = {
  bold: 'font-weight: bold;',
  normal: 'font-weight: normal;'
};

var blackTitle = colors.black + ' ' + fontWeights.bold;
var blackText = colors.black + ' ' + fontWeights.normal;
var greenTitle = colors.green + ' ' + fontWeights.bold;
var greenText = colors.green + ' ' + fontWeights.normal;
var redTitle = colors.red + ' ' + fontWeights.bold;
var blueTitle = colors.blue + ' ' + fontWeights.bold;
var blueText = colors.blue + ' ' + fontWeights.normal;

var logger = function logger() {
  var whitelist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return function (_ref) {
    var state = _ref.state,
        action = _ref.action,
        prev = _ref.prev,
        payload = _ref.payload,
        next = _ref.next;

    if (whitelist.length === 0 || whitelist.includes(state)) {
      console[console.group ? 'group' : 'log']('%cState: %c' + state + ' - %cAction: %c' + action + ' - %cTime: %c' + new Date().toISOString(), greenText, greenTitle, blueText, blueTitle, blackText, blackTitle);
      console.log('%cPrevious State:', redTitle, prev);
      console.log('%cPayload:', blackTitle, payload);
      console.log('%cNext State:', blueTitle, next);
      if (console.group) console.groupEnd();
    }
  };
};

exports.default = logger;