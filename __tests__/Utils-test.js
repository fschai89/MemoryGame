const {shuffleArray, generateNumber} = require('../src/utility/Utils');

describe('generateNumber', () => {
  test('it should generate same number array of cards based on input', () => {
    const input = 12;
    const output = 12;

    expect(generateNumber(input).length).toBe(output);
  });
});

describe('shuffleArray ', () => {
  test('it should generate array that not same as input', () => {
    const input = [1, 2, 3, 4, 5];

    expect(shuffleArray(input)).not.toBe(input);
  });
});
