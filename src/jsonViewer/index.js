import React, { useState, useEffect } from 'react';
import {
  isArray,
  isObject,
  parseObjectToList,
  needFormat,
  getType
} from './utils.js';
import Tree from './tree.js';
import './style.css';

const JsonView = props => {
  let { data } = props;
  let [list, setList] = useState([]);
  useEffect(() => {
    if (needFormat(getType(data))) {
      setList(parseObjectToList(data));
    }
  }, [data]);
  if (isArray(data) || isObject(data)) {
    return (
      <pre className="x-json-view">
        <p className="x-json-outter">{isArray(data) ? '[' : '{'}</p>
        {list.map((item, index) => (
          <Tree key={index} {...item} />
        ))}
        <p className="x-json-outter">{isArray(data) ? ']' : '}'}</p>
      </pre>
    );
  }
  return <div className="x-json-view">{data + ''}</div>;
};

export default JsonView;
