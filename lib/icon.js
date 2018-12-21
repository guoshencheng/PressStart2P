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
    viewBox="0 0 140 140"
    width={size}
    height={size}
    {...restProps}
  >
    {
      formatMatrix(matrix).map(item => (
        <rect 
          key={`${item.col}-${item.row}`}
          x={item.col * 20}
          y={item.row * 20}
          width={20} 
          height={20}
          style={{
            fill: color,
            stroke: 'none'
          }}
        />
      ))
    }
  </svg>
)
