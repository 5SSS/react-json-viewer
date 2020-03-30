export const isArray = item => {
  if (typeof item === 'string' && item === 'array') {
    return true;
  }
  return Object.prototype.toString.call(item) === '[object Array]';
};
export const isObject = item => {
  return Object.prototype.toString.call(item) === '[object Object]';
};
const isNull = item => {
  return Object.prototype.toString.call(item) === '[object Null]';
};
const isNumber = item => {
  return typeof item === 'number';
};
// const isString = item => {
//   return typeof item === 'string';
// };
const isRegexp = item => {
  return Object.prototype.toString.call(item) === '[object RegExp]';
};
const isBoolean = item => {
  return typeof item === 'boolean';
};
const isUndefined = item => {
  return typeof item === 'undefined';
};
const isFunction = item => {
  return typeof item === 'function';
};
export const getType = item => {
  let t = Object.prototype.toString.call(item);
  let match = /(?!\[).+(?=\])/g;
  t = t.match(match)[0].split(' ')[1];
  return t.toLowerCase();
};
export const needFormat = type => {
  return type === 'array' || type === 'object';
};
export const getIndent = level => {
  return { textIndent: `${level * 20 + 10}px` };
};
export const getLeft = (level, force) => {
  if (level === 1 && !force) {
    return { transform: `translateX(-10px)` };
  }
  if (force === true) {
    return { transform: `translateX(-${level * 20 + 10}px)` };
  }
  return { transform: `translateX(-${(level - 1) * 20 + 10}px)` };
};
export const getItems = item => {
  if (getType(item) === 'object') {
    return Object.keys(item).length;
  }
  return item.length;
};
export const parseObjectToList = function(data) {
  let start = 1;
  const parse = param => {
    let result = [];
    let type = getType(param);
    if (needFormat(type)) {
      let _param = [];
      if (type === 'object') {
        _param = Object.keys(param);
      } else {
        _param = param;
      }
      _param.forEach((item, index) => {
        let _item;
        let key;
        if (type === 'object') {
          _item = param[item];
          key = item;
        } else {
          _item = item;
          key = index;
        }
        let item_type = getType(_item);
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
      return `"${param.toString()}"`;
    }
    // if (isArray(param)) {
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
