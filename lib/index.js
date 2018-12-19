import React from 'react';
import Icon from './icon.js';


const MatrixA = [
  [0, 0, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [1, 1, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 1, 1],
]
export const A = () => (
  <Icon matrix={MatrixA} color="black" />
)
