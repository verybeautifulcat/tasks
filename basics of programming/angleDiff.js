/* Напишите функцию, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.*/

// 1 вариант
const angleDiff = (angle1, angle2) => {
  if (angle1 < angle2) {
    return angleDiff(angle2, angle1);
  }
  const diff1 = angle1 - angle2;
  const diff2 = 360 - diff1;

  return diff1 > diff2 ? diff2 : diff1;
};

// 2 вариант
const angleDiff = (a, b) => {
  const angle = Math.abs(a - b);
  return Math.min(angle, 360 - angle);
};


// Примеры
angleDiff(0, 190); // 170
angleDiff(225, 0); // 135
angleDiff(45, 300); //105
