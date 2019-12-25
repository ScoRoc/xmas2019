import React, { useEffect, useState } from 'reactn';
import PropTypes from 'prop-types';

const makeSnowFlakeStyle = ({ background, size, y, z }) => {
  return {
    background,
    borderRadius: '50%',
    height: `${size}px`,
    left: `${Math.floor(Math.random() * window.innerWidth)}px`,
    position: 'absolute',
    opacity: `${Math.random()}`,
    top: 0,
    width: `${size}px`,
    zIndex: z,
  }
}

const SnowFlake = props => {
  // State
  const [snowFlakeStyle, setSnowFlakeStyle] = useState(makeSnowFlakeStyle({
    background: props.background,
    size: props.size,
    y: props.y,
    z: props.z,
  }));

  // Effects
  useEffect(() => {
    setSnowFlakeStyle({ ...snowFlakeStyle, transform: `translate(${props.x}px, ${props.y}px` });
  }, [props.x, props.y]);

  return (
    <div style={snowFlakeStyle} />
  );
}

const styles = {
  //
}

SnowFlake.propTypes = {
  background: PropTypes.string,
  size: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  z: PropTypes.number,
}

SnowFlake.defaultProps = {
  background: 'white',
  size: 4,
  x: 0,
  y: 0,
  z: 100,
}

export default SnowFlake;
