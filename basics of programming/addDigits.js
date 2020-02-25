/* Реализуйте функцию addDigits, которая работает следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2 
Результат: 2*/

const addDigits = (num) => {
	const numToStr = String(num);

	if (numToStr.length === 1) {
		return num;
	}

  let result = 0;
  for (let index = 0; index < numToStr.length; index += 1) {
    const char = numToStr[index];
    result += Number(char);
  }
  return addDigits(result);
};


// Примеры 
addDigits(175); // 4
