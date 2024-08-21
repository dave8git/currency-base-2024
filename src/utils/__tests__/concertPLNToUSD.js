import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('2')).toBeNaN(); 
    expect(convertPLNToUSD(null)).toBeNaN(); 
    expect(convertPLNToUSD(undefined)).toBeNaN();
    expect(convertPLNToUSD({})).toBeNaN();
    expect(convertPLNToUSD('Test')).toBeNaN();
    expect(convertPLNToUSD('Dave')).toBeNaN();
  });
  it('should return NaN when there is not argument present', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return Error if PLN is not a string or a number', () => {
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
  })
  it('should return zero when input is lower than zero', () => {
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-2)).toBe('$0.00');
    expect(convertPLNToUSD(-56)).toBe('$0.00');
  });
});