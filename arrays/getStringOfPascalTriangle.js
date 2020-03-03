/* Треугольник Паскаля — бесконечная таблица биномиальных коэффициентов, имеющая треугольную форму.
В этом треугольнике на вершине и по бокам стоят единицы. Каждое число равно сумме двух расположенных над ним чисел.
Строки треугольника симметричны относительно вертикальной оси.

0:      1
1:     1 1
2:    1 2 1
3:   1 3 3 1
4:  1 4 6 4 1

Напишите функцию generate, которая возвращает указанную строку треугольника паскаля в виде массива.*/

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const generate = (lineNumber) => {
  const length = lineNumber + 1;
  const result = [];
  for (let i = 0; i < length; i += 1) {
    const element = (factorial(lineNumber) / (factorial(i) * factorial(lineNumber - i)));
    result.push(element);
  }
  return result;
};


// Примеры
generate(1); // [1, 1]
generate(4); // [1, 4, 6, 4, 1]
