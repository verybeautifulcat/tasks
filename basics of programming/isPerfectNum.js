/*Создайте функцию, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

Совершенное число — положительное целое число, равное сумме его положительных делителей (не считая само число).
Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.*/

const isPerfectNum = (num) => {
	// Проверяет аргумент num на совершенное число

	if (num < 6) { // совершенные числа начинаются с 6.
		return false;
	}

	const maxDivider = num / 2; // не имеет смысла проверять делители больше maxDivider, т к они не делять число без остатка.

	let sumDivider = 0;
	for (let divider = 1; divider <= maxDivider; divider += 1) {
		if (num % divider === 0) {
			sumDivider += divider;
		}
	}
	return num === sumDivider;
};

// Примеры
isPerfectNum(6); // true
isPerfectNum(127); //false
isPerfectNum(496); // true 