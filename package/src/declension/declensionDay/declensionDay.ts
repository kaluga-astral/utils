import { declensionOfWords } from '../declensionOfWords';

/**
 * Функцию, которая возвращает слово "день" в зависимости от входного числа со склонением.
 * @param {number} number Количество дней
 * @returns {string} Склоненное число дней.
 * 
 * @example
 * declensionDay(1); // 'день'
 * declensionDay(2); // 'дня'
 * declensionDay(5); // 'дней'
 */
export const declensionDay = declensionOfWords(['день', 'дня', 'дней']);
