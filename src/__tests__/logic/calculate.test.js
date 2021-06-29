import Big from 'big.js';
import calculate from '../../logic/calculate';

describe('calculate', () => {
  it('builds the total numbers as type happens', () => {
    let value = { total: '', next: '', operation: '' };
    value = calculate(value, '5');
    expect(value.total).toBe('5');
    value = calculate(value, '4');
    expect(value.total).toBe('54');
  });
  it('sets current operation', () => {
    let value = { total: '5', next: '', operation: '' };
    value = calculate(value, '+');
    expect(value.operation).toBe('+');
  });
  it('calculates total value if = is pressed', () => {
    let value = { total: '5', next: '4', operation: '+' };
    value = calculate(value, '=');
    expect(value.total).toStrictEqual(Big(9));
  });
  it('calculates and sets the operation if two numbers are given', () => {
    let data = { total: '1', next: '5', operation: '+' };
    data = calculate(data, '-');
    expect(data.total).toStrictEqual(Big(6));
    expect(data.operation).toBe('-');
  });
  it('calculations with decimal numbers', () => {
    let value = { total: '', next: '', operation: '' };
    value = calculate(value, '1');
    value = calculate(value, '.');
    value = calculate(value, '5');
    value = calculate(value, '*');
    value = calculate(value, '1');
    value = calculate(value, '.');
    value = calculate(value, '9');
    value = calculate(value, '=');
    expect(value.total).toStrictEqual(Big(2.85));
  });
  it('modifies the total to percentage', () => {
    let value = { total: '49', next: '', operation: '' };
    value = calculate(value, '%');
    expect(value.total).toStrictEqual(Big(0.49));
  });
  it('modifies the total value to its opposite value', () => {
    let value = { total: '49', next: '', operation: '' };
    value = calculate(value, '+/-');
    expect(value.total).toStrictEqual(Big(-49));
  });
  it('returns Error if there is an operation in place but not a next value', () => {
    let data = { total: '20', next: '', operation: '+' };
    data = calculate(data, '*');
    expect(data.next).toBe('Error');
  });
})