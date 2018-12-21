import React from 'react';
import ReactDOM from 'react-dom';
import { chars } from '../lib/index.js';

const names = ['C', 'e', 'n', 't', 'u', 'r', 'y'];
const world = ['W', 'o', 'r', 'l', 'd'];
const posts = ['p', 'o', 's', 't', 's'];
const github = ['g', 'i', 't', 'h', 'u', 'b'];

const PressStart2PString = ({ str, ...args }) => (
  <div {...args}>
    {
      str.split('').map((c, index) => {
        const Comp = chars[c];
        return <Comp size={40} key={index} />
      })
    }
  </div>
);

const App = (
  <div className="app">
    <PressStart2PString str="Century" />
    <PressStart2PString str="world" />
    <PressStart2PString str="posts" />
    <PressStart2PString str="github" />
    {
      Object.keys(chars).map(key => {
        const Comp = chars[key];
        return <Comp size={40} key={key} />
      })
    }
  </div>
)

ReactDOM.render(
  App,
  document.getElementById('root'),
)


