/* Реализуйте функцию, которая принимает на вход количество минут
(прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.*/

const formattedTime = (minuts) => {
  const hours = Math.floor((minuts / 60) % 24);
  const formattedHours = hours < 10 ? `0${hours}` : hours;

  const restOfMinuts = minuts % 60;
  const formattedMinuts = restOfMinuts < 10 ? `0${restOfMinuts}` : restOfMinuts;

  const formatted = `${formattedHours}:${formattedMinuts}`;
  return formatted;
};

// Примеры
formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600); // 10:00
formattedTime(5754); // 23:54
