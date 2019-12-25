export const getJitterDir = () => Math.random() > .5 ? 'right' : 'left';
export const getNewJitterDir = ({ jitterDir, jitter, x }) => Math.abs(x) >= jitter
                                                ? jitterDir === 'right'
                                                  ? 'left'
                                                  : 'right'
                                                : jitterDir;

export const randomLeft = () => Math.random() * window.innerWidth;
export const randomTop = () => Math.random() * window.innerHeight;
export const randomX = jitter => {
  const x = Math.floor(Math.random() * jitter);
  return Math.random() > .5 ? x : x * -1;
};
export const randomY = () => Math.random() * window.innerHeight;
