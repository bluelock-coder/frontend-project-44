const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
};

const generateRound = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const correctAnswer = String(gcd(a, b));
  const question = `${a} ${b}`;

  return { question, answer: correctAnswer };
};

export default generateRound;
