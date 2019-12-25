import React from 'react';
import PropTypes from 'prop-types';

const Star = props => {
  const style = {
    background: 'rgb(255, 220, 96)',
    borderRadius: '50%',
    height: `${props.size}px`,
    left: `${props.left}px`,
    opacity: Math.random(),
    position: 'absolute',
    top: `${props.top}px`,
    width: `${props.size}px`,
    // zIndex: 100,
  }
  return <div className='star' style={{ ...style, ...props.style }} />;
};

Star.propTypes = {
  left: PropTypes.number,
  size: PropTypes.number,
  top: PropTypes.number,
}

Star.defaultProps = {
  left: 50,
  size: 10,
  top: 50,
}

export default Star;
