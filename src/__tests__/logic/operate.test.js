import Big from 'big.js';
import operate from '../../logic/operate';

describe('operate', () => {
  it('add 2 numbers and returns a result', () => {
    const value = operate(20, 2, '+');
    expect(value).toStrictEqual(Big(22));
  });
  it('subtracts 2 numbers and returns a value', () => {
    const value = operate(20, 2, '-');
    expect(value).toStrictEqual(Big(18));
  });
  it('multiplies 2 numbers and returns a value', () => {
    const value = operate(20, 2, '*');
    expect(value).toStrictEqual(Big(40));
  });
  it('divides 2 numbers and returns a value', () => {
    const value = operate(20, 2, '÷');
    expect(value).toStrictEqual(Big(10));
  });
  it('divides 2 numbers and returns a decimal value', () => {
    const value = operate(20, 8, '÷');
    expect(value).toStrictEqual(Big(2.5));
  });
  it('divides a number by 100 and changes a number to percentage', () => {
    const value = operate(20, 1, '%');
    expect(value).toStrictEqual(Big(0.2));
  });
  it('returns opposite number', () => {
    const value = operate(20, -1, '+/-');
    expect(value).toStrictEqual(Big(-20));
  });
  it('returns Error if invalid number is entered', () => {
    const value = operate('somewords', 'notNumber', '+');
    expect(value).toStrictEqual('Error');
  });
  it('returns Division Error when number is divided by 0', () => {
    const value = operate(20, 0, '÷');
    expect(value).toStrictEqual('Division Error');
  });
});
