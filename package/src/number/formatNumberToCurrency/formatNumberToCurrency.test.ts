import { describe, expect, it } from 'vitest';

import { formatNumberToCurrency } from './formatNumberToCurrency';

const consoleMock = vi.spyOn(console, 'error');

// Если использовать обычные пробелы, то тест не проходит
const numbersToFormatCases = [
  { expectedValue: '100 ₽', numberToFormat: 100 },
  { expectedValue: '1 000 ₽', numberToFormat: 1000 },
  { expectedValue: '10 000 ₽', numberToFormat: 10000 },
  { expectedValue: '565 825 ₽', numberToFormat: 565825 },
];

const notSafeInteger = '999999999999999999999999999999999';

const incorrectCases = [null, undefined, false, true, notSafeInteger];

describe('formatNumberToCurrency', () => {
  it.each(numbersToFormatCases)(
    'Вернётся строка $expectedValue, если будет передано число $numberToFormat',
    ({ expectedValue, numberToFormat }) => {
      const result = formatNumberToCurrency({
        amount: numberToFormat,
      });

      expect(expectedValue).toBe(result);
    },
  );

  it('Вернётся кастомный текст, если переданное число - это 0', () => {
    const value = 0;
    const expectedPlaceholderMessage = 'Даром';

    const result = formatNumberToCurrency({
      amount: value,
      isTextInsteadOfZeroFormat: true,
      zeroSumPlaceholder: 'Даром',
    });

    expect(result).toEqual(expectedPlaceholderMessage);
  });

  it('Вернётся отформатированное значение, если amount передан в качестве строки', () => {
    const value = '100';
    const expectedCurrencyFormat = '100\u00A0₽';

    const result = formatNumberToCurrency({
      amount: value,
    });

    expect(result).toEqual(expectedCurrencyFormat);
  });

  it('Вернётся "0 ₽", если передано число 0', () => {
    const zeroValue = 0;
    const expectedCurrencyFormat = '0\u00A0₽';

    const result = formatNumberToCurrency({
      amount: zeroValue,
    });

    expect(result).toEqual(expectedCurrencyFormat);
  });

  it('Вернется текст "Бесплатно", если передан параметр для отображения текста', () => {
    const zeroValue = 0;
    const expectedCurrencyFormat = 'Бесплатно';

    const result = formatNumberToCurrency({
      amount: zeroValue,
      isTextInsteadOfZeroFormat: true,
    });

    expect(result).toEqual(expectedCurrencyFormat);
  });

  it.each(incorrectCases)(
    'В консоли появится сообщение о неподходящем формате переданных данных, если передано %s',
    (value) => {
      formatNumberToCurrency({
        // @ts-expect-error Здесь используется ts-ignore для проверки того, что в случае возникновения проблем в рантайме, мы не столкнемся с неожиданным поведением
        amount: value,
        isTextInsteadOfZeroFormat: true,
      });

      expect(consoleMock).toHaveBeenLastCalledWith(
        'formatNumberToCurrency: значение должно быть безопасным целым числом',
      );
    },
  );

  it.each(incorrectCases)('Вернется undefined, если передано %s', (value) => {
    const result = formatNumberToCurrency({
      // @ts-expect-error Здесь используется ts-ignore для проверки того, что в случае возникновения проблем в рантайме, мы не столкнемся с неожиданным поведением
      amount: value,
    });

    expect(result).toBeUndefined();
  });
});
