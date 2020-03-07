/* Реализуйте функцию isContinuousSequence, которая проверяет,
является ли переданная последовательность целых чисел возрастающей или убывающей непрерывно (не имеющей пропусков чисел).
Например, последовательность [4, 5, 6, 7] — непрерывная, а [0, 1, 3] — нет.
Последовательность может начинаться с любого числа, главное условие — отсутствие пропусков чисел.
Последовательность из одного числа не может считаться возрастающей или убывающей.*/

const isContinuousSequence = (coll) => {
  if (coll.length < 2) {
    return false;
  }
  for (let i = 0; i < coll.length - 1; i += 1) {
    const element = coll[i];
    const nextElement = coll[i + 1];
  
    if (element !== nextElement - 1) {
      return false;
    }
  }
  return true;
  };


  // Примеры
isContinuousSequence([10, 11, 12, 13]);     // true
isContinuousSequence([-5, -4, -3]);         // true
isContinuousSequence([10, 11, 12, 14, 15]); // false
isContinuousSequence([1, 2, 2, 3]);         // false
isContinuousSequence([7]);                  // false
isContinuousSequence([]);                   // false