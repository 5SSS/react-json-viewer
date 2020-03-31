import React from 'react';
import { render } from 'react-dom';
import JsonView from '../lib/index.js';
const data = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
render(<JsonView data={data} />, document.getElementById('root'));
