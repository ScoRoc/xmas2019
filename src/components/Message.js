// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Message = props => {
  // State
  const [color, setColor] = useState('rgb(0, 100, 0)');
  const [opacity, setOpacity] = useState(1);
  const [textShadow, setTextShadow] = useState('none');

  const handleClick = name => {
    props.toNextSlide(name);
    setOpacity(0);
  }

  const handleMouseEnter = () => {
    setColor('rgb(0, 200, 0)');
    setTextShadow('0 2px 4px rgba(200, 200, 200, .7)');
  }

  const handleMouseLeave = () => {
    setColor('rgb(0, 100, 0)');
    setTextShadow('none');
  }

  return (
    <div style={{ ...styles.wrapper, opacity }}>

      <div style={styles.messageDiv}>
        <p>{props.message}</p>
      </div>

      <p
        onClick={() => handleClick(props.nextSlide)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ ...styles.p, color, textShadow }}
      >
        Shut up and take me to my damn present already!
      </p>

    </div>
  );
};

const styles = {
  messageDiv: {
    padding: '6px',
    background: '#d9cba4',
    borderRadius: '3px',
  },
  p: {
    color: 'rgb(0, 100, 0)',
    transition: 'all 250ms',
    cursor: 'pointer',
  },
  wrapper: {
    height: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: '250ms',
  },
}

Message.propTypes = {
  toNextSlide: PropTypes.func.isRequired,
}

Message.defaultProps = {
  toNextSlide: null,
}

export default Message;
