'use strict';
import React, {useState, useEffect} from 'react';
import {View, Animated, Easing, ViewPropTypes, Platform} from 'react-native';
import PropTypes from 'prop-types';

const FlipCard = (props) => {
  const [animatedValue] = useState(new Animated.Value(0));

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg'],
  });

  useEffect(() => {
    let toValue = props.isFlipped ? 1 : 0;

    Animated.timing(animatedValue, {
      toValue: toValue,
      duration: props.rotateDuration,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, [props.isFlipped]);

  const frontAnimatedStyle = {rotateY: frontInterpolate};
  const backAnimatedStyle = {rotateY: backInterpolate};

  return (
    <View style={props.containerStyles}>
      <Animated.View
        style={[
          {
            backfaceVisibility: 'hidden',
            transform: [frontAnimatedStyle],
          },
          props.frontStyles,
        ]}>
        {props.frontView}
      </Animated.View>
      <Animated.View
        style={[
          {
            backfaceVisibility: 'hidden',
            position: 'absolute',
            transform: [backAnimatedStyle],
          },
          props.backStyles,
        ]}>
        {props.backView}
      </Animated.View>
    </View>
  );
};

FlipCard.propTypes = {
  isFlipped: PropTypes.bool.isRequired,
  frontView: PropTypes.element.isRequired,
  backView: PropTypes.element.isRequired,
  rotateDuration: PropTypes.number,
  containerStyles: ViewPropTypes.style,
  frontStyles: ViewPropTypes.style,
  backStyles: ViewPropTypes.style,
};

FlipCard.defaultProps = {
  rotateDuration: 300,
  containerStyles: null,
  frontStyles: null,
  backStyles: null,
  containerStyles: {
    flex: 1,
    alignItems: 'center',
  },
};

export default FlipCard;
