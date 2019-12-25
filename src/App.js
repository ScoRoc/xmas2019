// Libraries
import React, { setGlobal, useEffect, useGlobal, useRef } from 'reactn';
// Components
import Card from './pages/Card';
import Console from './components/Console';
import Home from './pages/Home';
import Message from './components/Message';
import Present from './pages/Present';
import SnowFlake from './components/SnowFlake';
import SnowFlakes from './components/SnowFlakes';
import Star from './components/Star';
// Custom Hooks
import useInterval from './hooks/useInterval';
// Utils
import { randomLeft, randomTop } from './utils/funcs';
// Misc
import messages from './messages/messages';
// CSS
import './App.min.css';

setGlobal({
  animationSpeed: 250,
  cardFillScreen: false,
  deg: 2,
  density: 200,
  fallSpeed: 40,
  fontSize: 40,
  giftFound: false,
  giftLocation: null,
  height: 900,
  jitter: 10,
  jitterAmount: .3,
  page: 'home',
  showConsole: false,
  showSnowFlakes: true,
  starCount: 100,
  starSizeMax: 1,
  word: 'Merry Christmas',
});

function App() {
  // Global
  const [animationSpeed] = useGlobal('animationSpeed');
  const [cardFillScreen, setCardFillScreen] = useGlobal('cardFillScreen');
  const [page, setPage] = useGlobal('page');
  const [showConsole, setShowConsole] = useGlobal('showConsole');
  const [showSnowFlakes, setShowSnowFlakes] = useGlobal('showSnowFlakes');
  const [starCount] = useGlobal('starCount');
  const [starSizeMax] = useGlobal('starSizeMax');
  // Refs
  const stars = useRef(starCount > 0
              ? new Array(starCount).fill('foo').map((a, i) => (
                  <Star key={`${i}${starSizeMax}`} left={randomLeft()} size={starSizeMax} top={randomTop()} />
                ))
              : null);

  // Effects
  useEffect(() => {
    const toggleConsole = e => {
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        setShowConsole(!showConsole);
      }
    }

    window.addEventListener('keypress', e => toggleConsole(e));

    return window.removeEventListener('keypress', toggleConsole)
  }, [showConsole]);

  useEffect(() => {
    stars.current = starCount > 0
                      ? new Array(starCount).fill('foo').map((a, i) => (
                          <Star key={`${i}${starSizeMax}`} left={randomLeft()} size={starSizeMax} top={randomTop()} />
                        ))
                      : [];
  }, [starCount, starSizeMax]);

  useEffect(() => {
    if (cardFillScreen) setShowSnowFlakes(false);
  }, [cardFillScreen]);

  // Functions
  const handleNextSlide = page => {
    setTimeout(() => {
      setPage(page);
      if (page === 'giftDad' || page === 'giftEva' || page === 'giftMom') setCardFillScreen(true);
    }, animationSpeed * 2)
  }

  const toPresent = page => {

  }

  // Variables
  const pages = {
    dad: <Message message={messages.dad} nextSlide='giftDad' toNextSlide={handleNextSlide} />,
    eva: <Message message={messages.eva} nextSlide='giftEva' toNextSlide={handleNextSlide} />,
    giftDad: <Present giftImg='shoes.png' />,
    giftEva: <Present giftImg='haircut.png' />,
    giftMom: <Present giftImg='golfTourney.png' />,
    home: <Home toNextSlide={handleNextSlide} />,
    mom: <Message message={messages.mom} nextSlide='giftMom' toNextSlide={handleNextSlide} />,
  }

  return (
    <div className="App" style={styles.App}>

      {stars.current}
      {showSnowFlakes && <SnowFlakes />}

        <Card children={pages[page]} fillScreen={cardFillScreen} />

        {showConsole && <Console />}

    </div>
  );
}

const styles = {
  App: {
    height: '100vh',
  },
}

export default App;
