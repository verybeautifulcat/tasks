import tr from '@hexlet/immutable-fs-trees';
/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход функцию-обработчик и дерево, а возвращает отображенное дерево.*/

const map = (f, tree) => {
  if (tr.isDirectory(tree)) {
    return { ...f(tree), children: tree.children.map((el) => map(f, el)) };
  }
  return f(tree);
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

map(n => ({ ...n, name: n.name.toUpperCase() }), tree);

// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'ETC',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NGINX',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'CONFIG.JSON', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'HOSTS', type: 'file', meta: {} },
//   ],
// };
