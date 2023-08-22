const { levelOne, levelTwo, levelThree, levelFour } = require('./levels');

describe('PARTE 01', () => {
   describe('NIVEL 01', () => {
      it('Debe devolver la operación correcta entre "A" y "B"', () => {
         expect(levelOne(0, 1)).toBe(1);
         expect(levelOne(2, 5)).toBe(7);
         expect(levelOne(10, 28)).toBe(38);
      });
   });

   describe('NIVEL 02', () => {
      it('Debe devolver el string correspondiente si el length es menor a dos', () => {
         expect(levelTwo('')).toBe('');
         expect(levelTwo('a')).toBe('a');
         expect(levelTwo('b')).toBe('b');
      });
      it('Debe devolver el string correspondiente si el length es  dos', () => {
         expect(levelTwo('aa')).toBe('a');
         expect(levelTwo('ab')).toBe('a');
         expect(levelTwo('bc')).toBe('b');
      });
      it('Debe devolver el string correspondiente si el length es mayor a dos', () => {
         expect(levelTwo('aaaa')).toBe('aa');
         expect(levelTwo('abgdg')).toBe('agg');
         expect(levelTwo('abbsbbbdl')).toBe('abbbl');
      });
   });
   describe('NIVEL 03', () => {
      it('Debe devolver un arreglo con los elementos de ambos arreglos unidos y en orden', () => {
         expect(levelThree([0], [1])).toStrictEqual([0, 1]);
         expect(levelThree([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
         expect(levelThree([1], [2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
         expect(levelThree([1, 2, 3], [4])).toStrictEqual([1, 2, 3, 4]);
         expect(levelThree([1, 2], [1, 2])).toStrictEqual([1, 1, 2, 2]);
      });
   });
   describe('NIVEL 04', () => {
      it('Debe devolver True si es un número Henry', () => {
         expect(levelFour(1729)).toBe(true);
         expect(levelFour(1)).toBe(true);
         expect(levelFour(81)).toBe(true);
         expect(levelFour(1458)).toBe(true);
      });
      it('Debe devolver False si NO es un número Henry', () => {
         expect(levelFour(1997)).toBe(false);
         expect(levelFour(1998)).toBe(false);
         expect(levelFour(18)).toBe(false);
      });
   });
});
