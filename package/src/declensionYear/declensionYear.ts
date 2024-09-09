import { declensionOfWords } from '../base';

/**
 * Функцию, которая возвращает слова "год" в зависимости от входного числа со склонением.
 * @param {number} number Количество лет
 * @returns {string} Склоненное число лет.
 * 
 * @example
 * declensionDay(1); // 'год'
 * declensionDay(2); // 'года'
 * declensionDay(5); // 'лет'
 */
export const declensionYear = declensionOfWords(['год', 'года', 'лет']);
