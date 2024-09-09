/**
 * Возвращает функцию, которая склоняет слова в зависимости от числа.
 * @param {string[]} words Массив слов для склонения [имя, когда number === 1, имя, когда number === 2, имя, когда number === 5]
 * @returns {function(number): string} Функция, принимающая число и возвращающая склоненное слово.
 * 
 * @example
 * const declensionDocuments = declensionOfWords(['документ', 'документа', 'документов'])
 * declensionDocuments(1); // 'документ'
 * declensionDocuments(2); // 'документа'
 * declensionDocuments(5); // 'документов'
 */

export const declensionOfWords = (words: string[]) => (count: number) => {
  const number = Math.abs(count) % 100;
  const n1 = number % 10;

  if (number > 10 && number < 20) {
    return words[2];
  }

  if (n1 > 1 && n1 < 5) {
    return words[1];
  }

  if (n1 === 1) {
    return words[0];
  }

  return words[2];
};
