# @astral/utils

Утилиты и функции общего назначения.

Table of contents

- [Installation](#installation)
- [base](#base)
  - [zeroPad](#zeropad)
  - [external](#external-base)
- [date](#date)
  - [addDays](#adddays)
  - [addMonths](#addmonths)
  - [addYears](#addyears)
  - [isDate](#isdate)
- [declension](#declension)
  - [declensionOfWords](#declensionofwords)
  - [declensionDay](#declensionday)
  - [declensionMonth](#declensionmonth)
  - [declensionYear](#declensionyear)
- [phone](#phone)
  - [formatPhoneToView](#formatphonetoview)
- [number](#number)
  - [formatNumberToCurrency](#formatNumberToCurrency)
---

# Installation

```shell
npm i --save @astral/utils
```

```shell
yarn add @astral/utils
```

---

# base

base utils - Общие утилиты и функции

## zeroPad

Утилита для генерации строковых чисел с заданным количеством символов, если число символов числа меньше необходимого.

```ts
import { zeroPad } from '@astral/utils';

// 001
zeroPad(1,3);

// 007
zeroPad(7,3);

// 111
zeroPad(111,3);
```

---

## external base

Внешние общие утилиты и функции

---

# date

Утилиты и функции работы с датами

## addDays

Утилита добавляющая к дате указанное количество дней

```ts
import { addDays } from '@astral/utils';

// 01.10.2024 - функция добавит 10 дней
addDays(new Date('01.01.2024'), 10);

```

---

## addMonths

Утилита добавляющая к дате указанное количество месяцев

```ts
import { addMonths } from '@astral/utils';

// 04.01.2024 - функция добавит 4 месяца
addMonths(new Date('01.01.2024'), 4);

```

---

## addYears

Утилита добавляющая к дате указанное количество лет

```ts
import { addYears } from '@astral/utils';

// 01.01.2024 - функция добавит 4 года
addYears(new Date('01.01.2020'), 4);

```

---

## isDate

Утилита проверки значения на валидность даты

```ts
import { isDate } from '@astral/utils';

// true
isDate(new Date('01.01.2020'));

// true
isDate('01.01.2020');


// true
isDate(2024);


// false
isDate(undefined);

// false
isDate(null);

// false
isDate('some string');

```

---

# declension

Утилиты и функции для работы со склонениями слов

## declensionOfWords

Базовая утилита для работы со склонениями

```ts
import { declensionOfWords } from '@astral/utils';

// Возвращает функцию для склонения слова 'документ'
const declensionDocument = declensionOfWords(['документ', 'документа', 'документов']);

```

---

## declensionDay

Утилита для склонения дней

```ts
import { declensionDay } from '@astral/utils';

// вернет 'день'
declensionDay(1); 

// вернет 'дня'
declensionDay(2); 

// вернет 'дней'
declensionDay(5); 

```

---

## declensionMonth

Утилита для склонения месяцев

```ts
import { declensionMonth } from '@astral/utils';

// вернет 'месяц'
declensionMonth(1); 

// вернет 'месяца'
declensionMonth(2); 

// вернет 'месяцев'
declensionMonth(5); 

```

---

## declensionYear

Утилита для склонения лет

```ts
import { declensionYear } from '@astral/utils';

// вернет 'год'
declensionYear(1); 

// вернет 'года'
declensionYear(2); 

// вернет 'лет'
declensionYear(5); 

```

---

# phone

Утилиты и функции работы с номерами телефона

## formatPhoneToView

Форматирование номера телефона по маске

```ts
import { formatPhoneToView } from '@astral/utils';

// +7 (999) 999-99-99
formatPhoneToView('79999999999');


// 8 (999) 999-99-99
formatPhoneToView('79999999999',{
    isStartWithPlus: false,
});


// undefined
formatPhoneToView();
```

---

# number

Утилиты и функции для работы с числами 

## formatNumberToCurrency

Форматирование чисел или строк в формат валюты

```ts 
import { formatNumberToCurrency } from '@astral/utils';

// "10 000 ₽"
formatNumberToCurrency({ amount: '10000' });

// "100 ₽"
formatNumberToCurrency({ amount: 100 });

// "0 ₽"
formatNumberToCurrency({ amount: 0 });

// "Бесплатно"
formatNumberToCurrency({
  amount: 0,
  isTextInsteadOfZeroFormat: true,
});

// "Даром"
formatNumberToCurrency({
  amount: 0,
  isTextInsteadOfZeroFormat: true,
  zeroSumPlaceholder: "Даром",
});
```

---
