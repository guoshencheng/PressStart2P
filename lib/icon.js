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

export default ({ matrix, className, color, ...restProps }) => (
  <svg 
    className={classnames('press-start-2p-svg')} 
    width="140"
    height="140"
    {...restProps}
  >
    {
      formatMatrix(matrix).map(item => (
        <rect 
          key={`${item.col}-${item.row}`}
          x={item.col * 20}
          y={item.row * 20}
          width="20" 
          height="20"
          style={{
            fill: color,
            stroke: 'none'
          }}
        />
      ))
    }
  </svg>
)
