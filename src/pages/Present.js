// Libraries
import React, { useGlobal } from 'reactn';
import PropTypes from 'prop-types';
// Components
import GiftBox from '../components/GiftBox';

const Present = props => {
  // Global
  const [giftLocation, setGiftLocation] = useGlobal('giftLocation');

  const showGiftArray = new Array(8).fill(false).concat(true);

  // Components
  const gifts = n => {
    const giftsArr = [];
    for (let i = 0; i < 3; i++) {
      const idx = Math.floor(Math.random() * showGiftArray.length);
      const showGift = showGiftArray.splice(idx, 1)[0];
      giftsArr.push(<GiftBox key={`gift${n}-${i}`} giftImg={props.giftImg} showGift={showGift} />);
      const location = `col: ${i}, row: ${n}`;
      if (showGift && giftLocation !== location) setGiftLocation(location);
    }
    return giftsArr;
  }
  const rows = () => {
    const rowsArr = [];
    for (let i = 0; i < 3; i++) {
      rowsArr.push(<div key={`row${i}`} style={styles.row}>{gifts(i)}</div>);
    }
    return rowsArr;
  }

  return (
    <div style={styles.page}>
      {rows()}
    </div>
  );
}

const styles = {
  page: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}

Present.propTypes = {
  giftImg: PropTypes.string,
}

Present.defaultProps = {
  giftImg: 'coal.png',
}

export default Present;
