/* Реализуйте функцию getLongestLength принимающую на вход строку и возвращающую длину максимальной последовательности из неповторяющихся символов.
Подстрока может состоять из одного символа.
Например в строке qweqrty, можно выделить следующие подстроки: qwe, weqrty. Самой длинной будет weqrty.*/

const getSubStr = (string) => {
  let substr = '';

  for (const value of string) {
    if (!substr.includes(value)) {
      substr += value;
    } else {
      break;
    }
  }
  return substr;
};

const getLongestLength = (str) => {
  if (str.length === 0) return 0;

  let res = [];

  for (let i = 0; i < str.length; i += 1) {
    const substr = getSubStr(str.slice(i));
    res.push(substr.length);
  }

  const max = Math.max.apply(null, res);
  return max;
};


// Примеры
getLongestLength('abcdeef'); // 5
getLongestLength('jabjcdel'); // 7
getLongestLength(''); // 0
