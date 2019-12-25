// Libraries
import React, { useGlobal } from 'reactn';
import PropTypes from 'prop-types';
// Utils
import { useReset } from '../hooks/useReset';

const Console = props => {
  // Global
  const [deg, setDeg] = useGlobal('deg');
  const [density, setDensity] = useGlobal('density');
  const [fallSpeed, setFallSpeed] = useGlobal('fallSpeed');
  const [fontSize, setFontSize] = useGlobal('fontSize');
  const [giftLocation, setGiftLocation] = useGlobal('giftLocation');
  const [height, setHeight] = useGlobal('height');
  const [jitter, setJitter] = useGlobal('jitter');
  const [jitterAmount, setJitterAmount] = useGlobal('jitterAmount');
  const [showConsole, setShowConsole] = useGlobal('showConsole');
  const [starCount, setStarCount] = useGlobal('starCount');
  const [starSizeMax, setStarSizeMax] = useGlobal('starSizeMax');
  const [word, setWord] = useGlobal('word');

  // Hooks
  const reset = useReset();

  // Components
  const inputs = [
    { parse: 'none', setter: setWord, title: 'word', value: word },
    { parse: parseFloat, setter: setDeg, title: 'deg', value: deg },
    { parse: parseFloat, setter: setHeight, title: 'height', value: height },
    { parse: parseFloat, setter: setFontSize, title: 'fontSize', value: fontSize },
    { parse: parseInt, setter: setDensity, title: 'density', value: density },
    { parse: parseInt, setter: setFallSpeed, title: 'fallSpeed', value: fallSpeed },
    { parse: parseFloat, setter: setJitter, title: 'jitter', value: jitter },
    { parse: parseFloat, setter: setJitterAmount, title: 'jitterAmount', value: jitterAmount },
    { parse: parseInt, setter: setStarCount, title: 'starCount', value: starCount },
    { parse: parseInt, setter: setStarSizeMax, title: 'starSizeMax', value: starSizeMax },
  ].map((input, i) => {
    const setterValue = e => {
      return input.parse === 'none'
              ? e.target.value
              : e.target.value === '' ? 0 : input.parse(e.target.value);
    }
    return (
      <div key={`${i}${input.title}`} style={styles.inputWrapper}>
        <span style={styles.inputP}>{input.title}</span>
        <input onChange={e => input.setter(setterValue(e))} value={input.value} />
      </div>
    );
  });

  return (
    <div style={styles.outerDiv}>
      <div style={styles.innerDiv}>

        <div style={styles.buttonsWapper}>
          <p onClick={reset} style={styles.p}>Back Home</p>
          <p  style={{ ...styles.p, color: 'black', }}>Gift Location: {giftLocation}</p>
          <p onClick={() => setShowConsole(false)} style={styles.p}>Close</p>
        </div>

        {inputs}

      </div>
    </div>
  );
}

const styles = {
  buttonsWapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  innerDiv: {
    height: '180px',
    padding: '20px',
    width: '500px',

    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',

    background: 'rgb(126, 126, 126)',
  },
  inputP: {
    marginRight: '5px'
  },
  inputWrapper: {
    marginLeft: '5px',
    marginRight: '5px',
  },
  outerDiv: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    zIndex: 1000,

    border: '2px solid rgb(80, 80, 80)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    marginTop: 0,
    marginBottom: '10px',
    color: 'blue',
    cursor: 'pointer',
  },
}

Console.propTypes = {

}

Console.defaultProps = {

}

export default Console;
