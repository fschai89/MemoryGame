import {Text} from 'react-native';
import React from 'react';
import FlipCard from '../src/reuseable/FlipCard';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <FlipCard
      isFlipped={false}
      frontView={<Text>hello</Text>}
      backView={<Text>hello2</Text>}
    />,
  );
});
