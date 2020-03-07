import tr from '@hexlet/immutable-fs-trees';
/* Реализуйте функцию, которая принимает на вход директорию, приводит имена всех файлов в этой и во всех вложенных директориях к нижнему регистру.
Результат в виде обработанной директории возвращается наружу.*/

const downcaseFileNames = (node) => {
  const { children } = node;
  if (!children) {
    return { ...node, name: node.name.toLowerCase() };
  }
  return { ...node, children: node.children.map(downcaseFileNames) };
};


// Примеры
const tree = tr.mkdir('/', [
  tr.mkdir('eTc', [
    tr.mkdir('NgiNx'),
    tr.mkdir('CONSUL', [
      tr.mkfile('config.json'),
    ]),
  ]),
  tr.mkfile('hOsts'),
]);

downcaseFileNames(tree);

// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'eTc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NgiNx',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'config.json', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'hosts', type: 'file', meta: {}, },
//   ],
// };
