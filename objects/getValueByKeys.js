/* Реализуйте функцию, которая извлекает из объекта (который может быть любой глубины вложенности) значение по указанным ключам.
Аргументы: 
  Исходный объект
  Массив ключей, по которым ведется поиск значения
В случае, когда добраться до значения невозможно, возвращается null.*/

// 1 вариант
const getValueByKeys = (obj, keys) => {
  const firstKeyFromArray = keys[0];
  const hasBarProperty = Object.prototype.hasOwnProperty.call(obj, firstKeyFromArray);
  if (!hasBarProperty) {
    return null;
  }
  return (keys.length === 1 ? obj[firstKeyFromArray] : getValueByKeys(obj[firstKeyFromArray], keys.slice(1)));
};


// 2 вариант
/*const getValueByKeys = (data, keys) => {
  let current = data;
  for (const key of keys) {
    const hasBarProperty = Object.prototype.hasOwnProperty.call(current, key);
    if (!hasBarProperty) {
      return null;
    }
      current = current[key];
    }
    return current;
};*/


// Примеры
const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

getValueByKeys(data, ['hosts', 1, 'active']); // false
getValueByKeys(data, ['user']); // 'ubuntu'
