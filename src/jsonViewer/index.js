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

class JsonView extends React.Component {
  render() {
    let { data } = this.props;
    let _data = null;

    if (needFormat(getType(data))) {
      _data = parseObjectToList(data);
    }

    if (isArray(data) || isObject(data)) {
      return (
        <pre className="x-json-view">
          <p className="x-json-outter">{isArray(data) ? '[' : '{'}</p>
          {_data.map((item, index) => (
            <Tree key={index} {...item} />
          ))}
          <p className="x-json-outter">{isArray(data) ? ']' : '}'}</p>
        </pre>
      );
    }
    return <div className="x-json-view">{data + ''}</div>;
  }
}

export default JsonView;
