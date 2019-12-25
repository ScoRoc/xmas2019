import React from 'reactn';
import PropTypes from 'prop-types';

const getDegrees = ({ deg, i, word }) => deg * getPosition({ i, word });

const getPosition = ({ i, word }) => i - (word.length - 1) / 2;

const CurvedText = props => {
  const makeText = word => {

    const textArray = word.split('');
    return word === '' ? '' : textArray.map((letter, i) => {
      const letterConfig = { deg: props.deg, i, word: word };
      return (
              <span
                key={i}
                style={{
                  ...styles.span,
                  ...props.styles.span,
                  height: `${props.height}px`,
                  fontSize: `${props.fontSize}px`,
                  transform: `rotate(${getDegrees(letterConfig)}deg)`,
                }}
              >
                {letter}
              </span>
      );
    });
  }

  const curvedText = makeText(props.word);

  return <div style={styles.div}>
    {curvedText}
  </div>;
}

const styles = {
  div: {
    position: 'relative',
  },
  span: {
    fontFamily: 'monospace',
    position: 'absolute',
    transformOrigin: 'bottom',
    textShadow: '0 4px 8px rgba(98, 219, 211, .8)'
  },
}

CurvedText.propTypes = {
  degrees: PropTypes.number,
  fontSize: PropTypes.number,
  height: PropTypes.number,
  word: PropTypes.string,
}

CurvedText.defaultProps = {
  degrees: 6,
  fontSize: 16,
  height: 100,
  word: null,
}

export default CurvedText;
