/*Реализуйте функцию, которая извлекает из переданного объекта все элементы по указанным ключам и возвращает новый объект.
Аргументы:
  Исходный объект
  Массив ключей, по которым должны быть выбраны элементы (ключ и значение) из исходного объекта, и на основе выбранных данных сформирован новый объект*/

  const getObjWithKeyAndValueByKeys = (obj, keys) => {
    const res = {};
    const entries = Object.entries(obj);
    for (const [key, value] of entries) {
      if (keys.includes(key)) {
        res[key] = value;
      }
    }
    return res;
  };


  // Примеры
  const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
  };
  
  getObjWithKeyAndValueByKeys(data, ['user']);       // { user: 'ubuntu' }
  getObjWithKeyAndValueByKeys(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
  getObjWithKeyAndValueByKeys(data, []);             // {}
  getObjWithKeyAndValueByKeys(data, ['none']);       // {}
