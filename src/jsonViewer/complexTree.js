import React, { useState } from 'react';
import { isArray, getLeft } from './utils.js';
import Tree from './tree.js';
export default function ComplexTree(props) {
  let {
    name,
    value,
    type,
    line,
    showIndex,
    needComma,
    items,
    level = 1,
    lastLine = null
  } = props;

  let [visiable, setVisiable] = useState(true);

  return (
    <div className="x-json-line">
      <p className="x-json-p" onClick={() => setVisiable(!visiable)}>
        <span className="x-json-mark" style={getLeft(level, true)}>
          {line}
        </span>
        <span className="x-json-content">
          {showIndex && <span className="x-json-key">{name}: </span>}
          <span className="x-json-pt">{isArray(type) ? '[' : '{'}</span>
        </span>
        {!visiable && (
          <span className="x-json-pt">
            {isArray(type) ? '...]' : '...}'}
            <span className="x-json-items"> ({items} items)</span>
            {needComma ? ',' : ''}
          </span>
        )}
      </p>
      <div style={{ display: visiable ? 'block' : 'none' }}>
        {value.map((item, index) => (
          <Tree key={index} level={level + 1} {...item} />
        ))}
        <p className="x-json-feet">
          {lastLine && (
            <span className="x-json-mark" style={getLeft(level, true)}>
              {lastLine}
            </span>
          )}
          <span className="x-json-pt">
            {isArray(type) ? ']' : '}'}
            {needComma ? ',' : ''}
          </span>
        </p>
      </div>
    </div>
  );
}
