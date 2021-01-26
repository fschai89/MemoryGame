'use strict';
import {useState, useEffect, useCallback} from 'react';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return [...array];
};

const generateNumber = (numberOfCard) => {
  let cards = [];
  while (cards.length != numberOfCard) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (!cards.find((card) => card.value == randomNumber)) {
      cards.push({
        id: cards.length + 1,
        value: randomNumber,
        show: false,
        matched: false,
      });
      cards.push({
        id: cards.length + 1,
        value: randomNumber,
        show: false,
        matched: false,
      });
    }
  }
  return shuffleArray(cards);
};

const useDimensions = () => {
  const [dimensions, setDimensions] = useState(null);

  const onLayout = useCallback((event) => {
    const {width, height} = event.nativeEvent.layout;
    setDimensions({width, height});
  }, []);

  return [dimensions, onLayout];
};

export {useDimensions, shuffleArray, generateNumber};
