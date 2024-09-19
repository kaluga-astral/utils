type FormatNumberToCurrencyParams = {
  amount: number | string;
  currencyCode?: 'RUB';
  isTextInsteadOfZeroFormat?: boolean;
  zeroSumPlaceholder?: string;
};

/**
 * Форматирует число в формат валюты.
 *
 * @param params - Параметры для форматирования.
 *
 * @param params.amount - Сумма в числовом или строковом формате.
 *
 * @param params.currencyCode - Код валюты в формате [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes).
 *
 * @param params.isTextInsteadOfZeroFormat - Флаг для замены отображения "0 ₽" на текст. По умолчанию "Бесплатно".
 *
 * @param params.zeroSumPlaceholder - Текст, который должен отображаться, если сумма равна "0". По умолчанию "Бесплатно".
 *
 * @example
 * formatCurrency({ amount: 1000 }); // "1 000 ₽"
 * formatCurrency({ amount: 0, zeroSumPlaceholder: "Даром", isFreeTextInsteadOfDefaultFormat: true }); // "Даром"
 * formatCurrency({ amount: 0 }); // "0 ₽"
 * formatCurrency({ amount: 10000, isFreeTextInsteadOfDefaultFormat: true }); // "10 000 ₽"
 * formatNumberToCurrency({amount: 10000, currencyCode: "USD"}) // "10 000 $"
 */
export const formatNumberToCurrency = (
  params: FormatNumberToCurrencyParams,
) => {
  const {
    amount,
    isTextInsteadOfZeroFormat,
    currencyCode = 'RUB',
    zeroSumPlaceholder = 'Бесплатно',
  } = params;

  const preparedAmount =
    // Если передана строка, то удаляем из неё пробелы
    typeof amount === 'string' ? Number(amount.replace(/\s+/g, '')) : amount;

  // Защита на случай, если передано небезопасное целое число, либо в amount попадает не число (например, в рантайме)
  if (!Number.isSafeInteger(preparedAmount)) {
    console.error(
      'formatNumberToCurrency: значение должно быть безопасным целым числом',
    );

    return;
  }

  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: preparedAmount % 1 !== 0 ? 2 : 0,
  });

  if (amount === 0 && isTextInsteadOfZeroFormat) {
    return zeroSumPlaceholder;
  }

  return formatter.format(preparedAmount);
};
