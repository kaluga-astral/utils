import { declensionOfWords } from './declensionOfWords';

describe('declensionOfWords', () => {
  it.each([1, 21, 31])('Возвращает "документ", если value равно "%s"', (value) => {
    expect(declensionOfWords(['документ', 'документа', 'документов'])(value)).toBe('документ');
  });

  it.each([2, 3, 4, 22, 23])(
    'Возвращает "документа", если value равно "%s"',
    (value) => {
      expect(declensionOfWords(['документ', 'документа', 'документов'])(value)).toBe('документа');
    },
  );

  it.each([5, 6, 7, 10, 15])(
    'Возвращает "документов", если value равно "%s"',
    (value) => {
      expect(declensionOfWords(['документ', 'документа', 'документов'])(value)).toBe('документов');
    },
  );
});
