import React from 'react';
import { needFormat } from './utils.js';
import ComplexTree from './complexTree.jsx';
import NormalTree from './normalTree.jsx';

export default function Tree(props) {
  let { type } = props;

  return (
    <>
      {needFormat(type) ? (
        <ComplexTree {...props} />
      ) : (
        <NormalTree {...props} />
      )}
    </>
  );
}
