'use strict';
const a = (function() {
  var f = false;
  return function() {
    if (!f) {
      console.log(
        'welcome use React-Json-viewer-cool, detail: "https://github.com/5SSS/react-json-viewer"'
      );
      f = true;
    }
  };
})();
a();
const ReactJsonViewerCool = require('./src/jsonViewer/index.js');
module.exports = ReactJsonViewerCool;
