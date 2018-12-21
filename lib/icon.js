import React from 'react';
import classnames from 'classnames';

const formatMatrix = matrix => {
  const items = [];
  matrix.forEach((row, r) => {
    row.forEach((item, c) => {
      if (!!item) {
        items.push({
          row: r,
          col: c,
        })
      }
    })
  });
  return items;
}

export default ({ matrix, size = 140, className, color = 'black', ...restProps }) => (
  <svg 
    className={classnames('press-start-2p-svg')} 
    width={size}
    height={size}
    {...restProps}
  >
    {
      formatMatrix(matrix).map(item => (
        <rect 
          key={`${item.col}-${item.row}`}
          x={item.col * size / 7}
          y={item.row * size / 7}
          width={size / 7} 
          height={size / 7}
          style={{
            fill: color,
            stroke: 'none'
          }}
        />
      ))
    }
  </svg>
)
