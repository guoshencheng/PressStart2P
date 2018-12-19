import React from 'react';
import ReactDOM from 'react-dom';
import { A } from '../lib/index.js';


console.log(ReactDOM, React);

const App = (
  <div className="app">
    <A />
  </div>
)

console.log(A);

ReactDOM.render(
  App,
  document.getElementById('root'),
)


