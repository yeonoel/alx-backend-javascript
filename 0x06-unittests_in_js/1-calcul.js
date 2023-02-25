function calculateNumber(type, a, b) {
  const numberOne = Math.round(a);
  const numberTwo = Math.round(b);

  if (type === 'SUM') {
    return numberOne + numberTwo;
  }

  if (type === 'SUBTRACT') {
    return numberOne - numberTwo;
  }

  if (type === 'DIVIDE') {
    if (numberTwo === 0) {
      return 'Error';
    }
    return numberOne / numberTwo;
  }
}

module.exports = calculateNumber;
