'use strict';
import {TouchableOpacity, Text, ViewPropTypes} from 'react-native';
import {moderateUIScale} from '../utility/UIScale';
import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[
        {backgroundColor: props.buttonColor, borderColor: props.buttonColor},
        props.containerStyles,
      ]}
      onPress={props.onPress}>
      <Text
        style={[
          {color: props.fontColor, fontSize: props.fontSize},
          props.textStyles,
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  containerStyles: ViewPropTypes.style,
  textStyles: Text.propTypes.style,
};

Button.defaultProps = {
  buttonColor: '#3576E1',
  fontColor: '#fff',
  fontSize: moderateUIScale(20),
  textStyles: {
    color: '#fff',
    textAlign: 'center',
  },
  containerStyles: {
    borderWidth: 1,
    borderRadius: moderateUIScale(5),
    alignSelf: 'center',
    paddingHorizontal: moderateUIScale(10),
    paddingVertical: moderateUIScale(5),
  },
};

export default Button;
