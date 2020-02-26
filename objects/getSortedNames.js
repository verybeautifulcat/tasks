/*Реализуйте функцию getSortedNames, которая принимает на вход список пользователей,
извлекает их имена, сортирует и возвращает отсортированный список имен.*/

// 1 вариант
const getSortedNames = (users) => {
  const res = [];
  for (const user of users) {
    res.push(user.name);
  }
  return res.sort();
};

// 2 вариант с использованием деструктуризации
/*const getSortedNames = (users) => {
  const names = [];

  for (const { name } of users) {
    names.push(name);
  }

  return names.sort();
};*/


// Примеры
const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

getSortedNames(users); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
