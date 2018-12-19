import React from 'react';
import ReactDOM from 'react-dom';
import { chars } from '../lib/index.js';

const App = (
  <div className="app">
    {
      Object.keys(chars).map(key => {
        const Comp = chars[key];
        return <Comp key={key} />
      })
    }
  </div>
)

ReactDOM.render(
  App,
  document.getElementById('root'),
)


