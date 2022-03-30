import React from 'react';
import './Cube.css';

const Cube = ({ name, color, rounded, width, height }) => {
  return (
    <div
      className="item"
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        borderRadius: rounded ? '50%' : 'false',
      }}
    >
      {name}
    </div>
  );
};

export default Cube;
