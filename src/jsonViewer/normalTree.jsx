import React from 'react';
import { getLeft } from './utils.js';

export default function NormalTree(props) {
  let { name, value, line, showIndex, type, needComma, level = 1 } = props;

  return (
    <div className="x-json-line">
      <span className="x-json-mark" style={getLeft(level)}>
        {line}
      </span>
      <span className="x-json-content">
        {showIndex && <span className="x-json-key">{name}: </span>}
        <span className={`x-json-${type}`}>{value}</span>
        <span className="x-json-comma">{needComma ? ',' : ''}</span>
      </span>
    </div>
  );
}
