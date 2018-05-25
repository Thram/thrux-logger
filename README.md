# Thrux Logger

[![Travis build](https://img.shields.io/travis/Thram/thrux-logger.svg?style=flat-square)](https://travis-ci.org/Thram/thrux-logger)
[![version](https://img.shields.io/npm/v/thrux-logger.svg?style=flat-square)](https://www.npmjs.com/package/thrux-logger)
[![downloads](https://img.shields.io/npm/dm/thrux-logger.svg?style=flat-square)](https://www.npmjs.com/package/thrux-logger)
[![MIT License](https://img.shields.io/npm/l/thrux-logger.svg?style=flat-square)](https://opensource.org/licenses/MIT) [![Greenkeeper badge](https://badges.greenkeeper.io/Thram/thrux-logger.svg)](https://greenkeeper.io/)

Logger middleware for Thrux

### Example

```javascript
import {addMidleware} from 'thrux';
import thruxLogger from 'thrux-logger';


addMidleware(thruxLogger());

// Now you can whitelist what state you want to log
addMidleware(thruxLogger(['someState']));
```

### Console Output

![Console Example](http://i.imgur.com/sPNnBdE.png)