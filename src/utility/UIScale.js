'use strict';
import {Dimensions} from 'react-native';
import {useState, useEffect, useCallback} from 'react';

//Guideline sizes are based on iPhone 8 Plus 5.5" screen mobile device
const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 736;

const scaleUI = (size) => parseInt((width / guidelineBaseWidth) * size);
const verticalUIScale = (size) =>
  parseInt((height / guidelineBaseHeight) * size);
const moderateUIScale = (size, factor = 0.5) =>
  parseInt(size + (scaleUI(size) - size) * factor);

export {scaleUI, verticalUIScale, moderateUIScale};
