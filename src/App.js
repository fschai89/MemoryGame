'use strict';
import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  Pressable,
  Alert,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FlipCard from './reuseable/FlipCard';
import Button from './reuseable/Button';
import {moderateUIScale} from './utility/UIScale';

import {useDimensions, shuffleArray, generateNumber} from './utility/Utils';
import styles from './styles/appStyle';

export default function App() {
  const [dimensions, onLayout] = useDimensions();
  const {width, height} = Dimensions.get('window');

  const NUMBER_OF_CARD = 12;

  const [CARD_PAIRS_VALUE, setCards] = useState(generateNumber(NUMBER_OF_CARD));
  const [steps, setSteps] = useState(0);
  const [firstCardOpened, setFirstCardOpened] = useState(undefined);
  const [secondCardOpened, setSecondCardOpened] = useState(undefined);
  const [isFlip, setIsFlip] = useState(false);

  const restart = () => {
    CARD_PAIRS_VALUE.map((card) => {
      card.show = false;
    });
    setCards([...CARD_PAIRS_VALUE]);
    setSteps(0);
    setFirstCardOpened(undefined);
    setSecondCardOpened(undefined);

    setTimeout(() => {
      let newCards = generateNumber(NUMBER_OF_CARD);
      setCards(newCards);
    }, 500);
  };

  useEffect(() => {
    if (firstCardOpened && secondCardOpened) {
      if (firstCardOpened.value === secondCardOpened.value) {
        setFirstCardOpened(undefined);
        setSecondCardOpened(undefined);
      } else {
        setTimeout(() => {
          CARD_PAIRS_VALUE.map((card) => {
            if (
              card.id == firstCardOpened.id ||
              card.id == secondCardOpened.id
            ) {
              card.show = false;
            }
          });
          setCards([...CARD_PAIRS_VALUE]);
          setFirstCardOpened(undefined);
          setSecondCardOpened(undefined);
        }, 1000);
      }
    }
  }, [firstCardOpened, secondCardOpened]);

  useEffect(() => {
    let allShow = CARD_PAIRS_VALUE.every((card) => card.show === true);
    if (allShow) {
      Alert.alert('Congratulations!', `You win this game by ${steps} steps!`, [
        {
          text: 'Try another round',
          onPress: () => restart(),
        },
      ]);
    }
  }, [CARD_PAIRS_VALUE]);

  const openCard = (card) => {
    if (!firstCardOpened) {
      setSteps(steps + 1);
      card.show = true;
      setFirstCardOpened(card);
    }
    if (firstCardOpened && card != firstCardOpened && !secondCardOpened) {
      setSteps(steps + 1);
      card.show = true;
      setSecondCardOpened(card);
    }

    setCards([...CARD_PAIRS_VALUE]);
  };

  const cardHeight = dimensions
    ? dimensions.height / 4 - moderateUIScale(10)
    : 0;
  const cardWidth = dimensions ? dimensions.width / 3 - moderateUIScale(15) : 0;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Button title="Restart" onPress={() => restart()} />
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.font1}>Steps:</Text>
          <Text style={styles.font2}>{steps}</Text>
        </View>
      </View>
      <View style={styles.cardsContainer} onLayout={onLayout}>
        {dimensions &&
          CARD_PAIRS_VALUE.map((card) => {
            return (
              <Pressable
                style={{
                  height: cardHeight,
                  width: cardWidth,
                  marginBottom: moderateUIScale(10),
                }}
                key={card.id}
                onPress={() => openCard(card)}>
                <FlipCard
                  isFlipped={card.show}
                  frontView={
                    <View
                      style={[
                        styles.frontCard,
                        {
                          height: cardHeight,
                          width: cardWidth,
                        },
                      ]}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: moderateUIScale(30),
                          fontWeight: 'bold',
                        }}>
                        ?
                      </Text>
                    </View>
                  }
                  backView={
                    <View
                      style={[
                        styles.backCard,
                        {
                          height: cardHeight,
                          width: cardWidth,
                        },
                      ]}>
                      <Text style={styles.font3}>{card.value}</Text>
                    </View>
                  }
                />
              </Pressable>
            );
          })}
      </View>
    </SafeAreaView>
  );
}
