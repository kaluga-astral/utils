import dayjs from 'dayjs';

/**
 * Утилита добавляющая к дате указанное количество дней
 * @param {Date} date Дата к которой надо добавить дни
 * @param {number} count количество месяцев которые надо прибавить (при отрицательном значении отнять)
 * @return {Date} Возвращает новую дату с прибавленным количеством дней
 */
export const addDays = (date: Date, count: number): Date =>
  dayjs(date).add(count, 'd').toDate();
