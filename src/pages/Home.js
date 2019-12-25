// Libraries
import React, { useEffect, useGlobal, useState } from 'reactn';
import PropTypes from 'prop-types';
// Components
import CurvedText from '../components/CurvedText';
import XmasColorFadeText from '../components/XmasColorFadeText'

const Home = props => {
  // Global
  const [animationSpeed] = useGlobal('animationSpeed');
  const [deg] = useGlobal('deg');
  const [fontSize] = useGlobal('fontSize');
  const [height] = useGlobal('height');
  const [word] = useGlobal('word');
  // State
  const [translateY, setTranslateY] = useState(40);

  // Effects
  useEffect(() => {
    setTranslateY(0);
  }, []);

  const handleClick = name => {
    props.toNextSlide(name);
    setTranslateY(-40);
  }

  // Style
  const textWrapperStyle = {
    ...styles.textWrapper,
    transition: `all ${animationSpeed}ms ease-in ${animationSpeed}ms`,
    transform: `translateY(${translateY}vh)`,
  };

  return (
    <div style={textWrapperStyle}>

      <CurvedText
        deg={deg}
        fontSize={fontSize}
        height={height}
        styles={styles.curvedText}
        word={word}
      />

      <div style={{ ...styles.xmasTextDiv, transition: `all ${animationSpeed}ms ease-in`, transform: `translateY(${translateY}vh)` }}>
        <XmasColorFadeText name='mom' onClick={() => handleClick('mom')} styles={styles.xmasColorFadeText} text='Madre' />
        <XmasColorFadeText name='dad' onClick={() => handleClick('dad')} styles={styles.xmasColorFadeText} text='Fashja' />
        <XmasColorFadeText name='eva' onClick={() => handleClick('eva')} styles={styles.xmasColorFadeText} text='LP' />
      </div>

    </div>
  );
}

const styles = {
  curvedText: {
    span: {
      color: 'white',
    },
  },
  textWrapper: {
    height: '100%',
    paddingTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  xmasColorFadeText: {
    div: {
      cursor: 'pointer',
      zIndex: 1000,
    },
    span: {
      color: 'green',
      fontFamily: 'monospace',
      fontSize: '30px',
    },
  },
  xmasTextDiv: {
    height: '100%',
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}

Home.propTypes = {
  toNextSlide: PropTypes.func.isRequired,
}

Home.defaultProps = {
  toNextSlide: null,
}

export default Home;
