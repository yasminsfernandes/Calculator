// calculator.test.js
const { add, subtract } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 2 from 5 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});