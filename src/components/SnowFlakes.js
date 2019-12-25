// Libraries
import React, { useEffect, useGlobal, useState } from 'reactn';
import PropTypes from 'prop-types';
import SnowFlake from '../components/SnowFlake';
// Hooks
import useInterval from '../hooks/useInterval';
// Utils
import { getJitterDir, getNewJitterDir, randomX, randomY } from '../utils/funcs';

const SnowFlakes = props => {
  // Global
  const [density] = useGlobal('density');
  const [fallSpeed] = useGlobal('fallSpeed');
  const [jitter] = useGlobal('jitter');
  const [jitterAmount] = useGlobal('jitterAmount');
  // State
  const [snowFlakeArr, setSnowFlakeArr] = useState(
    density > 0
      ? new Array(density).fill({ jitterDir: getJitterDir(), x: randomX(jitter), y: randomY() })
      : null
  );

  // Effects
  useEffect(() => {
    const newArr = density > 0
                  ? new Array(density).fill({ jitterDir: getJitterDir(), x: 0, y: 0 })
                  : [];
    setSnowFlakeArr(newArr.map(({ jitterDir, x, y }) => {
      const newY = randomY();
      return {
        jitterDir,
        x: randomX(jitter),
        y: newY > window.innerHeigth ? newY - window.innerHeight : newY,
      }
    }));
  }, [density]);

  snowFlakeArr.map(snowFlake => ({ ...snowFlake, jitterDir: getJitterDir() }));

  // Custom Hooks
  useInterval(() => {
    setSnowFlakeArr(snowFlakeArr.map(({ jitterDir, x, y }) => {
      const newJitterDir = getNewJitterDir({ jitterDir, jitter, x });
      const newX = newJitterDir === 'right' ? x + jitterAmount : x - jitterAmount;
      const newY = y + 1;
      return {
        jitterDir: newJitterDir,
        x: newX,
        y: newY > window.innerHeight ? window.innerHeight - newY : newY,
      }
    }));
  }, fallSpeed);

  return snowFlakeArr.map(({ x, y }, i) => {
    return <SnowFlake key={i} x={x} y={y} />
  });
}

const styles = {
  //
}

SnowFlakes.propTypes = {
  //
}

SnowFlakes.defaultProps = {
  //
}

export default SnowFlakes;
