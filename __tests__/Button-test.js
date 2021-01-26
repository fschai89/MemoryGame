import 'react-native';
import React from 'react';
import Button from '../src/reuseable/Button';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Button title={'hello'} onPress={() => {}} />);
});
