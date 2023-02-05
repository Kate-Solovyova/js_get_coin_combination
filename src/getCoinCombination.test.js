'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
  
  it(`should retutn an array`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it('should return an array length of 4 elements', () => {
    const coins = getCoinCombination(4);
  
    expect(coins.length)
      .toBe(4);
  });

  it('if input = 1 cent, should return 1 penny', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);;
  });

  it('if input = 6 cent, should return 1 penny + 1 nickel', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);;
  });

  it('if input = 17 cent, should return 2 pennies + 1 nickel + 1 dime', () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);;
  });

  it('if input = 50 cent, should return 2 quarters', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);;
  });

  it('boundary value: if input = 41 cent, should return 1 penni + 1 nickel + 1 dime + 1 quarter', () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);;
  });

  it('boundary value: if input = 0 cent, should return 0', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);;
  });

  it('boundary value: if input = 5 cent, should return 1 nickel', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);;
  });

  it('boundary value: if input = 10 cent, should return 1 dime', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);;
  });

  it('boundary value: if input = 25 cent, should return 1 quarter', () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);;
  });

  it('negative case: if input is empty, should return NaN', () => {
    expect(getCoinCombination())
      .toEqual([NaN, NaN, NaN, NaN]);;
  });

  it('negative case: if input is undefined, should return NaN', () => {
    expect(getCoinCombination(undefined))
      .toEqual([NaN, NaN, NaN, NaN]);
  });
});