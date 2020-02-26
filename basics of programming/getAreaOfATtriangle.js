/* Реализуйте функцию которая считает площадь треугольника на основе известной стороны и прилегающих к ней углов.
Углы задаются в градусах. Экспортируйте ее по умолчанию.

Формула: eсли известна одна сторона треугольника и два прилежащих к ней угла, то площадь данного треугольника вычисляется,
как половина квадрата данной стороны умноженная на дробь, в числителе которой, произведение синусов прилежащих углов, а в знаменателе синус противолежащего угла.*/

const radians = (degrees) =>
// Так как тригонометрические функции в Math работают с радианами, необходимо преобразовывать градусы в радианы.
degrees * (Math.PI / 180);

const getAreaOfTriangle = (side, angle1, angle2) => {
  const sin1 = Math.sin(radians(angle1));
  const sin2 = Math.sin(radians(angle2));
  const sin3 = Math.sin(Math.PI - radians(angle1 + angle2));

  return (1 / 2) * side * side * ((sin1 * sin2) / sin3);
};


// Примеры
getAreaOfTriangle(3, 60, 60); // 3.897114317029973
