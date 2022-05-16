let CLC = require('cli-color');
function capitalizeNames(name) {
  for (let index = 0; index < name.length; index++) {
    name[index] = name[index][0].toUpperCase() + name[index].slice(1);
  }
}

function capitalizeName(names) {
  return names.map(name => name.toUpperCase() + name.slice(1));
}

let names = ['haider', 'ibraheem', 'yusuf'];
capitalizeName(names);
console.log(CLC.yellow(names));

capitalizeNames(names);
console.log(names);

