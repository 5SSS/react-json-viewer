"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseObjectToList = exports.getItems = exports.getLeft = exports.getIndent = exports.needFormat = exports.getType = exports.isObject = exports.isArray = void 0;

var isArray = function isArray(item) {
  if (typeof item === 'string' && item === 'array') {
    return true;
  }

  return Object.prototype.toString.call(item) === '[object Array]';
};

exports.isArray = isArray;

var isObject = function isObject(item) {
  return Object.prototype.toString.call(item) === '[object Object]';
};

exports.isObject = isObject;

var isNull = function isNull(item) {
  return Object.prototype.toString.call(item) === '[object Null]';
};

var isNumber = function isNumber(item) {
  return typeof item === 'number';
}; // const isString = item => {
//   return typeof item === 'string';
// };


var isRegexp = function isRegexp(item) {
  return Object.prototype.toString.call(item) === '[object RegExp]';
};

var isBoolean = function isBoolean(item) {
  return typeof item === 'boolean';
};

var isUndefined = function isUndefined(item) {
  return typeof item === 'undefined';
};

var isFunction = function isFunction(item) {
  return typeof item === 'function';
};

var getType = function getType(item) {
  var t = Object.prototype.toString.call(item);
  var match = /(?!\[).+(?=\])/g;
  t = t.match(match)[0].split(' ')[1];
  return t.toLowerCase();
};

exports.getType = getType;

var needFormat = function needFormat(type) {
  return type === 'array' || type === 'object';
};

exports.needFormat = needFormat;

var getIndent = function getIndent(level) {
  return {
    textIndent: "".concat(level * 20 + 10, "px")
  };
};

exports.getIndent = getIndent;

var getLeft = function getLeft(level, force) {
  if (level === 1 && !force) {
    return {
      transform: "translateX(-10px)"
    };
  }

  if (force === true) {
    return {
      transform: "translateX(-".concat(level * 20 + 10, "px)")
    };
  }

  return {
    transform: "translateX(-".concat((level - 1) * 20 + 10, "px)")
  };
};

exports.getLeft = getLeft;

var getItems = function getItems(item) {
  if (getType(item) === 'object') {
    return Object.keys(item).length;
  }

  return item.length;
};

exports.getItems = getItems;

var parseObjectToList = function parseObjectToList(data) {
  var start = 1;

  var parse = function parse(param) {
    var result = [];
    var type = getType(param);

    if (needFormat(type)) {
      var _param = [];

      if (type === 'object') {
        _param = Object.keys(param);
      } else {
        _param = param;
      }

      _param.forEach(function (item, index) {
        var _item;

        var key;

        if (type === 'object') {
          _item = param[item];
          key = item;
        } else {
          _item = item;
          key = index;
        }

        var item_type = getType(_item);
        result.push({
          name: key,
          line: start++,
          type: item_type,
          value: parse(_item),
          showIndex: type === 'object',
          lastLine: needFormat(item_type) ? start++ : null,
          items: needFormat(item_type) ? getItems(_item) : 0,
          needComma: _param.length !== index + 1
        });
      });

      return result;
    } else {
      if (isNumber(param)) {
        return param + '';
      }

      if (isNull(param)) {
        return 'null';
      }

      if (isUndefined(param)) {
        return 'undefined';
      }

      if (isBoolean(param)) {
        return param + '';
      }

      if (isFunction(param)) {
        return ' ƒ() {...}';
      }

      if (isRegexp(param)) {
        return param.toString();
      }

      return "\"".concat(param.toString(), "\"");
    } // if (isArray(param)) {
    //   param.forEach((item, index) => {
    //     let type = getType(item);
    //     result.push({
    //       name: index,
    //       line: start++,
    //       type: type,
    //       value: parse(item),
    //       showIndex: false,
    //       lastLine: needFormat(type) ? start++ : null,
    //       items: needFormat(type) ? param.length : 0,
    //       needComma: param.length !== index + 1
    //     });
    //   });
    //   return result;
    // } else if (isObject(param)) {
    //   let keys = Object.keys(param);
    //   keys.forEach((item, index) => {
    //     let type = getType(param[item]);
    //     result.push({
    //       name: item,
    //       line: start++,
    //       type: type,
    //       value: parse(param[item]),
    //       showIndex: true,
    //       lastLine: needFormat(type) ? start++ : null,
    //       items: needFormat(type) ? keys.length : 0,
    //       needComma: keys.length !== index + 1
    //     });
    //   });
    //   return result;
    // }

  };

  return parse(data);
};

exports.parseObjectToList = parseObjectToList;