/* Реализуйте функцию, которая делает заглавной первую букву каждого слова в предложении.*/

const capitalizeFirstLetterOfWords = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const shouldBeBig = (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? str[i].toUpperCase() : str[i];
  }

  return result;
};


// Примеры
capitalizeFirstLetterOfWords('it is awesome!'); // It Is Awesome!
