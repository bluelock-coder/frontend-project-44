// src/utils.js
const getRandomInt = (min, maxExclusive) =>
  Math.floor(Math.random() * (maxExclusive - min)) + min;

export default getRandomInt;
