function capitalizeNames(name) {
  for (let i = 0; i < name.length; i++) {
    name[i] = name[i][0].toUpperCase() + name[i].slice(1);
  }
}

function capitalizeName(names) {
  return names.map(name => name.toUpperCase() + name.slice(1));
}

let names = ['haider', 'ibraheem', 'yusuf'];
capitalizeName(names);
console.log(names);

capitalizeNames(names);
console.log(names);






