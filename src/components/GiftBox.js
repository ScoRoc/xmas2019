// Libraries
import React, { useGlobal, useState } from 'reactn';
import PropTypes from 'prop-types';

import '../scss/GiftBox.min.css';

const GiftBox = props => {
  // Global
  const [giftFound, setGiftFound] = useGlobal('giftFound');
  // State
  const [giftShowing, setGiftShowing] = useState(false);
  const [rotateY, setRotateY] = useState(0);
  const [showingSide, setShowingSide] = useState('front');

  // Funcs
  const handleClick = () => {
    setRotateY(180);
    setGiftShowing(true);
    if (props.showGift) setTimeout(() => setGiftFound(true), 750);
  }

  // Components
  const gift = props.showGift
              ? (
                <div
                  className={giftShowing ? 'gift-showing' : 'gift-closed'}
                  style={{ ...styles.giftBackdrop, transform: giftShowing ? 'scale(1.1)' : null }}
                >
                  <img className='golf-tourney' src={props.giftImg} />
                </div>
              )
              : <img className='coal' src='coal.png' />;

  return (
    <div className='giftbox' onClick={handleClick}>

        <div className='ribbon'>
          <div className='ribbon-right' />
          <div className='ribbon-left' />
        </div>

        <div className='box'>

          <div className='box-inside'>
            {gift}
          </div>

          <div className='box-back' style={{ transform: `rotateY(${rotateY}deg)` }} />

          <div className='box-front' style={{ transform: `rotateY(${rotateY}deg)` }}>
            <div className='box-front-ribbon-hor' />
            <div className='box-front-ribbon-vert' />
          </div>

        </div>

    </div>
  );
}

const styles = {
  giftBackdrop: {
    height: '90%',
    width: '90%',
    margin: '5% auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 230, 255, 0.3)',
    borderRadius: '5px',
    transition: 'all 250ms 250ms',
  },
}

GiftBox.propTypes = {
  giftImg: PropTypes.string,
  showGift: PropTypes.bool,
}

GiftBox.defaultProps = {
  giftImg: 'coal.png',
  showGift: null,
}

export default GiftBox;
