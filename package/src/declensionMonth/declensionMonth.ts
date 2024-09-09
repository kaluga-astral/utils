import { declensionOfWords } from '../base';

/**
 * Функцию, которая возвращает слова "месяц" в зависимости от входного числа со склонением.
 * @param {number} number Количество месяцев
 * @returns {string} Склоненное число месяцев.
 * 
 * @example
 * declensionDay(1); // 'месяц'
 * declensionDay(2); // 'месяца'
 * declensionDay(5); // 'месяцев'
 */
export const declensionMonth = declensionOfWords([
  'месяц',
  'месяца',
  'месяцев',
]);
