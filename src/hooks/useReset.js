import { useGlobal } from 'reactn';

export const useReset = () => {
  const [cardFillScreen, setCardFillScreen] = useGlobal('cardFillScreen');
  const [giftFound, setGiftFound] = useGlobal('giftFound');
  const [page, setPage] = useGlobal('page');
  const [showSnowFlakes, setShowSnowFlakes] = useGlobal('showSnowFlakes');

  const reset = () => {
    setCardFillScreen(false);
    setShowSnowFlakes(true);
    setGiftFound(false);
    setPage('home');
  }

  return reset;
}
