/**
 * Created by thram on 27/01/17.
 */

const colors = {
  black: 'color: black;',
  red: 'color: crimson;',
  green: 'color: teal;',
  blue: 'color: cornflowerblue;',
};
const fontWeights = {
  bold: 'font-weight: bold;',
  normal: 'font-weight: normal;',
};

const blackTitle = `${colors.black} ${fontWeights.bold}`;
const blackText = `${colors.black} ${fontWeights.normal}`;
const greenTitle = `${colors.green} ${fontWeights.bold}`;
const greenText = `${colors.green} ${fontWeights.normal}`;
const redTitle = `${colors.red} ${fontWeights.bold}`;
const blueTitle = `${colors.blue} ${fontWeights.bold}`;
const blueText = `${colors.blue} ${fontWeights.normal}`;

const logger = (whitelist = []) => ({ state, action, prev, payload, next }) => {
  if (whitelist.length === 0 || whitelist.includes(state)) {
    console[console.group ? 'group' : 'log'](`%cState: %c${state} - %cAction: %c${action} - %cTime: %c${new Date().toISOString()}`,
      greenText, greenTitle, blueText, blueTitle, blackText, blackTitle);
    console.log('%cPrevious State:', redTitle, prev);
    console.log('%cPayload:', blackTitle, payload);
    console.log('%cNext State:', blueTitle, next);
    if (console.group) console.groupEnd();
  }
};

export default logger;
