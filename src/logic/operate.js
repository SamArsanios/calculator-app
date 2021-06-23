import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  let firstNum;
  let secondNum;
  if (numberTwo === '') return numberOne;
  if (String(numberOne) === '0' && numberTwo === '0') return 'Undefined';
  if (String(numberOne).includes('Infinity')) {
    if (numberTwo === '0' && operation === '÷') return 'Undefined';
    return numberOne;
  }

  try {
    firstNum = Big(numberOne);
    secondNum = Big(numberTwo);
  } catch (error) {
    return 'Error';
  }

  switch (operation) {
    case '+':
      result = firstNum.plus(secondNum);
      break;
    case '-':
      result = firstNum.minus(secondNum);
      break;
    case '*':
      result = firstNum.times(secondNum);
      break;
    case '÷':
      if (String(secondNum) === '0') {
        if (firstNum > 0) result = 'Division Error';
        if (firstNum < 0) result = '-Division Error';
      } else {
        result = firstNum.div(secondNum);
      }

      break;
    case '%':
      result = firstNum.div(100);
      break;
    case '+/-':
      result = firstNum.times(-1);
      break;
    default:
      break;
  }
  return result;
};

export default operate;
