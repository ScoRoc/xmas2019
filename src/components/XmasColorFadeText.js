// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// CSS
import '../App.min.css';

const classNames = {
  eva: 'xmasRotate',
  dad: 'xmasFlip',
  mom: 'xmasBounce',
}

const XmasColorFadeText = props => {
  // State
  const [className, setClassName] = useState('xmasColorFade');

  const letters = props.text.split('').map((letter, i) => {
    return (
      <span
        className={className}
        key={`${i}${letter}`}
        style={{ animationDelay: `${i * .4}s`, ...styles.span, ...props.styles.span }}
      >
        {letter}
      </span>
    )
  })

  return (
    <div
      onClick={props.onClick}
      onMouseEnter={() => setClassName(classNames[props.name])}
      onMouseLeave={() => setClassName('xmasColorFade')}
      style={props.styles.div}
    >
      {letters}
    </div>
  );
}

const styles = {
  span: {
    display: 'inline-block',
  },
}

XmasColorFadeText.propTypes = {
  text: PropTypes.string,
}

XmasColorFadeText.defaultProps = {
  text: 'Example',
}

export default XmasColorFadeText;
