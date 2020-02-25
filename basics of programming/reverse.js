/* Реализуйте функцию, которая переворачивает строку задом наперед */

// 1 вариант (цикл for)
const reverse = (str) => {
  let result = '';
  for (index = str.length - 1; index >= 0; index -= 1) {
    result += str[index];
  }
  return result;
};

// 2 вариант (рекурсия)
const reverse = (str) => {
  if (str.length === 0) {
    return str;
  }

  const lastIndex = str.length - 1;
  const lastChar = str[lastIndex];
  return (lastChar + reverse(str.slice(0, lastIndex)));
}

// Примеры
reverse('I am a bird'); // 'drib a ma I'