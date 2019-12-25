// Libraries
import React, { useGlobal } from 'reactn';
import PropTypes from 'prop-types';
// Utils
import { useReset } from '../hooks/useReset';

 function PopUp(props) {
   // Global
   const [animationSpeed] = useGlobal('animationSpeed');
   const [giftFound] = useGlobal('giftFound');
   // Hooks
   const reset = useReset();

   // Variables
  const size = props.fillScreen ? { height: '100vh', width: '100vw' } : null;

  return (
    <div style={{ ...styles.div, transition: `all ${animationSpeed * 2}ms`, ...props.styles, ...size }}>
      {giftFound && <p onClick={reset} style={styles.startOver}>Start Over</p>}
      {props.children}
    </div>
  );
}

const styles = {
  div: {
    height: '300px',
    width: '500px',

    background: 'rgb(25, 0, 0)',
    border: '1px solid rgba(0, 75, 0, .3)',
    borderRadius: '4px',
    boxShadow: '0 0 10px 10px rgba(0, 25, 0, .5)',
  },
  startOver: {
    position: 'absolute',
    width: '100%',
    marginTop: '10px',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}

PopUp.propTypes = {
  fillScreen: PropTypes.bool,
}

PopUp.defaultProps = {
  fillScreen: false,
}

export default PopUp;
