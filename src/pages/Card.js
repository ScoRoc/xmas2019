// Libraries
import React, { useGlobal, useState } from 'reactn';
import PropTypes from 'prop-types';
// Components
import PopUp from '../components/PopUp';

const Card = props => {

  return (
    <div className='homeContainer' style={styles.homeContainer}>

      <PopUp fillScreen={props.fillScreen} styles={styles.popUp}>
        {props.children}
      </PopUp>

    </div>
  );
}


const styles = {

  homeContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popUp: {
    overflow: 'hidden',
    zIndex: 500,
  },
}

Card.propTypes = {
  children: PropTypes.element,
  onAnimateExit: PropTypes.func,
}

Card.defaultProps = {
  children: null,
  onAnimateExit: null,
}

export default Card;
